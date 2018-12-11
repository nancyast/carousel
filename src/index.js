import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import Slide from "./Slide";
import "./styles.css";

function App() {
  return (
    <Slider>
      <Slide
        backgroundImage={{
          backgroundImage:
            'url("http://trian.vn/FileManager/Files//admin_tapchi/images/2(35).jpg")'
        }}
      />
      <Slide
        backgroundImage={{
          backgroundImage:
            'url("http://my.metadata.vn/share/proxy/alfresco-noauth/api/internal/shared/node/O_WwpLpdSaCu9Trspdq1cg/content/Hoa%20h%E1%BB%93ng%20trong%20tuy%E1%BA%BFt.jpg")'
        }}
      />
      <Slide
        backgroundImage={{
          backgroundImage:
            'url("http://3.bp.blogspot.com/-gcWIpCkboW4/VLwqMX9JHhI/AAAAAAAAg68/gRvWpguipFk/s1600/izdesigner%2B-%2BNh%E1%BB%AFng%2Bh%C3%ACnh%2B%E1%BA%A3nh%2B%C4%91%E1%BA%B9p%2Bv%E1%BB%81%2Bhoa%2BPhong%2BLan%2B3.jpg")'
        }}
      />
      <Slide
        backgroundImage={{
          backgroundImage:
            'url("http://123anhdep.net/wp-content/uploads/2016/04/tuyen-chon-hinh-nen-hoa-phong-lan-dep-lang-man-diu-dang-nhat-cho-may-tinh-them-tuoi-moi-cuon-hut-8.jpg")'
        }}
      />
    </Slider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
