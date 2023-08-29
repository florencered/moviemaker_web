import React, { useState } from 'react';
import Editdomain from './editdomain';

const EditFile = () => {
    const [showEditDomain, setShowEditDomain] = useState(false);

    const toggleEditDomain = () => {
        setShowEditDomain(!showEditDomain);
    };

    const boxStyle = {
        width: '437px',
        height: '458px',
        position: 'relative',
        top: '39px',
        borderRadius: '20px',
        border: '1px solid #978839',
        display: 'flex',
        flexDirection: 'column',
    };

    const imageStyle = {
        width: '60px',
        height: '60px',
        position: 'absolute',
        top: '50px',
        borderRadius: '50%',
    };

    const inputStyle = {
        border: 'none',
        borderBottom: '2px solid red',
        outline: 'none',
        backgroundColor: 'transparent',
        width: '370px',
        height: '-190px', 
        marginBottom: '10px',
    };

    return (
        <div style={{ marginLeft: "70px" }}>
            <div style={{ display: "block" }}>
                <img src="images/images/explore.png" alt="image" style={imageStyle} />
                <p style={{ marginTop: "30px", marginLeft: "70px" }}><strong>samrzkhan</strong></p>
                <p style={{ marginTop: "1px", marginLeft: "12px", width: "300px" }}>Change profile photo</p>
                <img src="images/arrow.png" alt="Muted Users Icon" style={{ width: "12px", height: "12px", marginLeft: "190px", marginTop: "-43px", marginBottom: "20px" }} />
            </div>
            <div>
                {showEditDomain ? (
                    <Editdomain />
                ) : (
                    <div style={boxStyle}>
                        <div style={{ marginTop: "12px" }}>
                            <h1 style={{ width: "120px", color: "#978839" }}><strong>Name</strong></h1>
                            <input type="text" style={inputStyle} />

                            <h2 style={{ width: "150px", color: "#978839" }}><strong>Username</strong></h2>
                            <input type="text" style={inputStyle} />

                            <h3 style={{ width: "100px", color: "#978839" }}><strong>Bio</strong></h3>
                            <input type="text" style={inputStyle} />

                            <h3 style={{ width: "130px", color: "#978839" }}><strong>Gender</strong></h3>
                            <input type="text" style={inputStyle} />

                            <h3
                                style={{ width: "170px", color: "#978839", cursor: "pointer" }}
                                onClick={toggleEditDomain}
                            ><strong>Edit Domain</strong></h3>
                            <input type="text" style={inputStyle} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditFile;
