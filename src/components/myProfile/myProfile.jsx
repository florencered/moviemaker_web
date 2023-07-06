import React from "react";
import Nav from "../home/sidebar/sidebar.js";
import vector from "../public/images/vector.png";
import img from "../public/images/vector2.png";
import vector2 from "../public/images/vector3.png";
import vector3 from "../public/images/vector4.png";
import materialsymbols from "../public/images/vector5.png";
import materialsymbols2 from "../public/images/vector6.png";
import line from "../public/images/Line82.png";
import vector10 from "../public/images/Vector-10.png";


export const myProfile = () => {
  return (
    <>
    <div class="bg-[#F7EAA9] rounded-r-2xl mb-2 pb-3 w-1/5 h-fit">
        <Nav props1="/images/logo.png"></Nav>
      </div>
    <div className="l">
      <div className="profilepage-l">
        <div className="overlap">
          <div className="overlap-group">
            <div className="group">
              <div className="overlap-group-wrapper">
                <div className="div">
                  <div className="element-likes">
                    918
                    <br />
                    <br />
                    likes
                  </div>
                  <div className="element-following">
                    64
                    <br />
                    <br />
                    following
                  </div>
                  <div className="element-followers">
                    882
                    <br />
                    <br />
                    followers
                  </div>
                  <div className="element-posts">
                    12
                    <br />
                    <br />
                    posts
                  </div>
                </div>
              </div>
              <div className="overlap-2">
                <h1 className="text-wrapper">samrzkhan</h1>
                <img className={vector10} alt="Vector" />
              </div>

              <div className="group-2" />
            </div>
            
  
            
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">Edit Profile</div>
                
              </div>
            </div> 
            <div className="over-wrapper">
                <div className="divi-wrapper">
                    <div className="text-wrap">Share profile</div>
                </div>
            </div>
            
           <div className="group-3">
              <div className="overlap-3">
                <div className="text-wrapper-4">Other Skills</div>
              </div>
            </div>
            <div className="group-4">
                <div className="ov">
            <div className="text-wrapper-5">Settings</div>
            </div>
            </div>
            
  </div> 
          <div className="overlap-4">
            <div className="group-5">
              <div className="text-wrapper-6">Sameer Khan</div>
              <div className="text-wrapper-7">Director</div>
              <p className="p">I didn't go to film school, I went to films.</p>
            </div>
            <div className="box">
      <div className="group-wrapper">
        <div className="group">
          <img src={vector} alt="Vector" />
          <img src={img} alt="Vector" />
          <img src={vector2} alt="Vector"  />
          <img src={vector3} alt="Vector" />
          <img src={materialsymbols} alt="Material symbols" />
          <img src={materialsymbols2} alt="Material symbols"  />
          <img src={line} alt="Line"  />
        </div>
      </div>
    </div>
            
            <div className="group-6">
              <div className="overlap-5">
                <div className="rectangle-2" />
                <div className="text-wrapper-8">Portfolio</div>
                <div className="text-wrapper-9">Sameer Khan</div>
                <div className="text-wrapper-10">Director</div>
                <div className="text-wrapper-11">My Work</div>
                <div className="group-7">
                  <div className="group-8">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-12">http://my1stshortfilmteaser</div>
                    </div>
                  </div>
                  <div className="group-9">
                    <div className="overlap-6">
                      <div className="text-wrapper-12">http://my3rdshortfilmteaser</div>
                    </div>
                  </div>
                  <p className="text-wrapper-13">This is the link to the second teaser:</p>
                  <div className="group-10">
                    <div className="overlap-7">
                      <div className="text-wrapper-12">http://my2ndshortfilmteaser</div>
                    </div>
                  </div>
                  <p className="text-wrapper-14">This is the link to the third teaser:</p>
                  <p className="text-wrapper-15">This is the link to the first teaser:</p>
                </div>
                <div className="text-wrapper-16">My Filmography</div>
                <div className="text-wrapper-17">My Certificates</div>
                <div className="group-11">
                  <div className="overlap-8">
                    <div className="text-wrapper-12">IFP Participation Certificate.pdf</div>
                  </div>
                </div>
                <div className="group-12">
                  <div className="overlap-9">
                    <div className="text-wrapper-12">DWFF Participation Certificate.pdf</div>
                  </div>
                </div>
                
                <p className="text-wrapper-19">
                  I have directed three short films: Job Done, By Myself, Alex Sinclair. I've produced two, and
                  performed as a secondary actor in one film.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  </div>
  
  </>
  );
};
export default myProfile