import React from "react";
import { v4 as uuidv4 } from "uuid";

const Output = (props) => {
    const onChange = (e) => {
      props.setCodeData({
        ...props.codeData,
        input: e.target.value,
      });
    };

    return (
        <div className="col d-flex flex-column text-start">
            <label className="form-label">Input</label>
            <input
              className="form-control shadow"
              type="text"
              placeholder="Enter input here..."
              value={props.codeData.input}
              onChange={onChange}
            />
            <label className="form-label">Stack</label>
            <div className="container flex-grow-0 p-0">
              {props.codeData.stack.map(index => (
                <span
                  disabled={true}
                  className="badge bg-secondary shadow"
                  key={uuidv4()}
                  >
                    {index}
                </span>
              ))}
            </div>
            <label className="form-label">Output</label>
            <p className="card shadow flex-grow-1 Output">{props.codeData.output}</p>
        </div>
    );
}

export default Output