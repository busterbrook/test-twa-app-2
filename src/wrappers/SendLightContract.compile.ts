import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/send_light_contract.tact',
    options: {
        debug: true,
    },
};
