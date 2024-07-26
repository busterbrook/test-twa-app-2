/*
import React from "react";
import { Address, Contract, OpenedContract, toNano } from "ton-core";
import {SendTon} from "../wrappers/SendLightContract"
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

export function useSendContract(){
    const {client} = useTonClient()
    const {sender} = useTonConnect()

    const sendContract = useAsyncInitialize(async() => {
        if(!client) return 

        const contract = new SendTonLightContract(Address.parse("EQD22LC5DlteFcVHjI_863Ao8EW2F3LNGqpBFprMcBsOms3L"))

        return client.open(contract) as OpenedContract<SendTonLightContract>
    }, [client])

    return {
        sendTon: () => {
            return sendContract?.sendTon(sender);
        }
        /*
        sendTon: () => {
            const message: SendTon = {
                $$type: 'SendTon',
                amountTon: toNano("1.0")
            }
            sendContract?.send(sender, {
                value: toNano("1.05")
            }, message)
        }

    }
}
 */