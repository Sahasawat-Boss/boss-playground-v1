import React from 'react';

function Parallax2() {
    return (
        /*-- Parallax Section 1 --*/
        <div
            className="parallax h-[420px]"
            style={{
                backgroundImage: "url('/picture-pg1/Ai gen3.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        ></div>
    );
}

export default Parallax2;
