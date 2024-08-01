import React from "react";
import {Address, OpenedContract, toNano} from "ton-core";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { Swap, ThreeSideContract} from "../../build/ThreeSideContract/tact_ThreeSideContract.ts";
import {useTonAddress} from "@tonconnect/ui-react";

//const testnetAddress: string = "EQCKNM8n6H4tJoUEKrFnVbEgU7xaco7eYv_i5XI7aKyzR1r2"

type SwapData = {
    offerId: number
    amountIn: number
}

export function useSwap({offerId, amountIn}: SwapData){
    const userFriendlyAddress = useTonAddress();
    const {client} = useTonClient();
    const {sender} = useTonConnect();

    const createOffer = useAsyncInitialize(async() => {
        if(!client) return

        const contract = ThreeSideContract.fromAddress(Address.parse("EQBnn_RlFxQPlwvmOwpfi9UXnSYtOIiJA-dR2xW5uF7O-pVL"))

        return client.open(contract) as OpenedContract<ThreeSideContract>
    }, [client])

    return {
        swap: () => {
            const message: Swap = {
                $$type: "Swap",
                offerId: toNano(offerId),
                addressTaker: Address.parse(userFriendlyAddress)
            }
            createOffer?.send(sender, {
                value: toNano((amountIn) + (amountIn * 0.01))
            }, message)
        }
    }
}