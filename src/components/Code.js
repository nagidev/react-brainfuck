import React from "react";

const Code = (props) => {
    const onChange = (e) => {
        props.setCodeData({
            ...props.codeData,
            code: e.target.value,
        });
    };

    return (
        <div className="col d-flex flex-column">
            <textarea
                className="Code flex-grow-1 card border shadow"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                wrap="off"
                placeholder="Enter code here..."
                value={props.codeData.code}
                onChange={onChange} />
            <div className="btn-group mx-auto">
                <button className="btn btn-danger" onClick={props.run}>Run</button>
                <button className="btn btn-danger" onClick={props.reset} disabled={false}>Reset</button>
            </div>
        </div>
    );
}

export default Code