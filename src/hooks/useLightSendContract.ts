import React from "react";
import { Address, Contract, OpenedContract, toNano } from "ton-core";
import {SendLightContract,SendTon} from "../wrappers/SendLightContract"
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

export function useSendContract(){
    const {client} = useTonClient()
    const {sender} = useTonConnect()

    const sendContract = useAsyncInitialize(async() => {
        if(!client) return 

        const contract = SendLightContract.fromAddress(Address.parse("EQCKNM8n6H4tJoUEKrFnVbEgU7xaco7eYv_i5XI7aKyzR1r2"))

        // @ts-ignore
        return client.open(contract) as OpenedContract<SendLightContract>
    }, [client])

    return {
        sendTon: () => {
            const message: SendTon = {
                $$type: "SendTon",
                amountTon: toNano("1.0")
            }
            // @ts-ignore
            sendContract?.send(sender, {
                value: toNano("1.05")
            }, message)
        }
    }
}