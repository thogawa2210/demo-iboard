import { useState, useCallback, useEffect } from "react";

import { storeChartUpdate } from "@store/slices/chartSlice";
import useWebSocket from "react-use-websocket";

import { useAppDispatch } from "./useStore";

const vn30Symbols = [
  "ACB",
  "BCM",
  "BID",
  "BVH",
  "CTG",
  "FPT",
  "GAS",
  "GVR",
  "HDB",
  "HPG",
  "MBB",
  "MSN",
  "MWG",
  "NVL",
  "PDR",
  "PLX",
  "POW",
  "SAB",
  "SSI",
  "STB",
  "TCB",
  "TPB",
  "VCB",
  "VHM",
  "VIB",
  "VIC",
  "VJC",
  "VNM",
  "VPB",
  "VRE"
];

const configMess = (
  selectedStocks: any,
  lastPBSeq?: any,
  isrequestTL?: any,
  c_isReqMK?: any,
  cShowId?: number,
  pthMktId?: number,
  c_isPercent?: any,
  isOddLot?: any,
  selectedStocksOddLot?: any,
  isIncrValue?: any
) => {
  const msg = {
    H: "pbhub",
    M: "UpdateParams",
    A: [
      selectedStocks,
      lastPBSeq || 0,
      isrequestTL || false,
      c_isReqMK || true,
      cShowId ?? "",
      pthMktId ?? "",
      c_isPercent || false,
      isOddLot || false,
      selectedStocksOddLot || "",
      isIncrValue || true
    ],
    I: 0
  };

  const __msg = JSON.stringify(msg);
  return __msg;
};

export default function useWs() {
  const dispatch = useAppDispatch();
  const [socketUrl, setSocketUrl] = useState<string | null>(null);

  const getUrlSocket = async () => {
    const baseUrl = "kbquote.kbsec.com.vn/signalr";
    const clientProtocol = "2.1";
    const connectionData = JSON.stringify([{ name: "pbhub" }]);
    const negotiateUrl = `https://${baseUrl}/negotiate?connectionData=${connectionData}&clientProtocol=${clientProtocol}`;
    const data = await (await fetch(negotiateUrl)).json();
    const connectionToken = encodeURIComponent(data.ConnectionToken);
    setSocketUrl(
      `wss://${baseUrl}/connect?transport=webSockets&clientProtocol=${clientProtocol}&connectionToken=${connectionToken}&connectionData=${connectionData}&tid=0`
    );
    return `wss://${baseUrl}/connect?transport=webSockets&clientProtocol=${clientProtocol}&connectionToken=${connectionToken}&connectionData=${connectionData}&tid=0`;
  };

  const { sendMessage, lastJsonMessage } = useWebSocket(socketUrl, {
    onOpen: (e) => {
      console.log("WebSocket connection established.");
    }
  });
  const handleData = useCallback(() => {
    const data: any = lastJsonMessage;
    // Xử lý lấy dữ liệu cho Index Info
    try {
      if (data.M) {
        for (let idx = 0; idx < data.M.length; idx++) {
          if (data.M[idx].A && data.M[idx].M === "m") {
            for (let idx2 = 0; idx2 < data.M[idx].A.length; idx2++) {
              const __val = data.M[idx].A[idx2];
              const str = JSON.stringify(__val);
              dispatch(storeChartUpdate(str));
            }
          }
        }
      }
    } catch (error) {}
  }, [dispatch, lastJsonMessage]);

  useEffect(() => {
    getUrlSocket();
  }, []);

  useEffect(() => {
    if (socketUrl) {
      sendMessage(configMess(vn30Symbols.join(",")));
    }
  }, [sendMessage, socketUrl]);

  useEffect(() => {
    handleData();
  }, [handleData]);
  return {};
}
