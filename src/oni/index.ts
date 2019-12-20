import gas from "./elements/gas.json";
import liquid from "./elements/liquid.json";
import solid from "./elements/solid.json";
import special from "./elements/special.json";

let elements = () => {
    return [gas, liquid, solid, special].map(value => value.elements).flat();
};

export default elements();
