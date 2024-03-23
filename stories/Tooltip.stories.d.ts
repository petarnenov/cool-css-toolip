declare namespace _default {
    export let title: string;
    export { Tooltip as component };
    export namespace parameters {
        let layout: string;
    }
    export let tags: string[];
    export namespace argTypes {
        namespace backgroundColor {
            let control: string;
        }
    }
    export let args: {};
}
export default _default;
export namespace Default {
    let args_1: {};
    export { args_1 as args };
}
export namespace CustomIcon {
    export namespace args_2 {
        export { DarkInfo as icon };
    }
    export { args_2 as args };
}
export namespace CustomText {
    export namespace args_3 {
        let tooltip: string;
    }
    export { args_3 as args };
}
export namespace CustomSize {
    export namespace args_4 {
        let width: string;
        let height: string;
    }
    export { args_4 as args };
}
import Tooltip from '../src';
