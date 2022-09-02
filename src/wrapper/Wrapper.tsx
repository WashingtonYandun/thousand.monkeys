import { Slider } from "./Silder";

export const Wrapper = () => {
    return (
        <>
            <div className="wrapper__inputs">
                <div className="wrapper__inputs--input-text">
                    <label htmlFor="Input">Input</label>
                    <input type="text" name="text" id="text" />
                    <input type="button" value="Try" />
                </div>
            </div>
        </>
    );
};
