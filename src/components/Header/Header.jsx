import "./Header.css";
import "../CustomButton/CustomButton";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import InfoBox from "../InfoBox/InfoBox";
import Modal from "../Modal/Modal";

const Header = ({ aktifKullaniciSayisi, setAktifKullanici }) => {
  //console.log(aktifKullaniciSayisi)
  const [basilanButon, setBasilanButon] = useState(null);
  const [modalGoster, setModalGoster] = useState(false);

  const menuIsimleri = ["Ana Sayfa", "Hakkımızda", "Ürünler", "İletişim"];

  return (
    <header className="header">
      <div className="header-logo">logo</div>
      <nav className="navbar">
        {menuIsimleri.map((menuIsmi) => (
          <a>{menuIsmi}</a>
        ))}
      </nav>

      <div className="header-right">
        {basilanButon ? (
          <CustomButton
            buttonTitle={`${basilanButon} Olarak Çıkış Yap `}
            buttonColor={"#E50914"}
            onClick={() => {
              if (basilanButon === "KKullanici") {
                setAktifKullanici(aktifKullaniciSayisi - 1);
              }
              setBasilanButon(null);
            }}
          />
        ) : (
          <>
            <CustomButton
              onClick={() => {
                setAktifKullanici(aktifKullaniciSayisi + 1);
                setBasilanButon("Kullanıcı");
              }}
              buttonTitle={"Kulanıcı Girişi"}
              buttonColor={"#25D366"}
            />
            <CustomButton
              onClick={() => {
                setBasilanButon("Yönetici");
              }}
              buttonTitle={"Yönetici Girişi"}
              buttonColor={"#F4B400"}
            />
            <CustomButton
              onClick={() => setModalGoster(true)}
              buttonTitle={"Kayıt Ol"}
              buttonColor={"grey"}
            />
          </>
        )}
        {basilanButon === "Yönetici" && (
          <InfoBox
            infoMetin={"Aktif Kullanıcı Sayısı "}
            infoDeger={aktifKullaniciSayisi}
          />
        )}
        {basilanButon === "Kullanıcı" && (
          <InfoBox
            infoMetin={"Sizinle Birlikte Kullanıcı Sayısı"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}
      </div>
      {modalGoster === true && <Modal setModalGoster={setModalGoster} />}
    </header>
  );
};
export { Header };
