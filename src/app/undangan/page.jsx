"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Table from "@/componets/Table";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import "animate.css/animate.min.css";

const Undangan = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);

  const pembicara = [
    {
      id: "01",
      name: "DR. dr. Sudi Astono, MS",
      job: "Kemenaker",
      tema: "Tema: “Kebijakan Penerapan K3 Di Perusahaan”",
      poto: "https://i.ibb.co/k2TLLsZ/Ellipse-1.png",
    },
    {
      id: "02",
      name: "Dinna Novita, ST",
      job: "BPJS Ketenagakerjaan",
      tema: "Tema: “Sosilaisasi dan Mekanisme Klaim BPJS Ketenagakerjaan ”",
      poto: "https://i.ibb.co/hcyqbQN/Ellipse-4.png",
    },
    {
      id: "03",
      name: "Dr. dr. Dwi Soemarko, MS, Sp.OK",
      job: "PERDOKI",
      tema: "Tema: “Peran dan fungsi Dokter Okupasi dalan Pelayanan Kesahatan Kerja Untuk Perusahaan”",
      poto: "https://i.ibb.co/72scnRS/dwi.png",
    },
    {
      id: "04",
      name: "dr. Iwan Rivai Alam Siahaan Sp.OK",
      job: "OHC PT RS Pelabuhan",
      tema: "Tema: “Program Occupational Health Center PT RS Pelabuhan”",
      poto: "https://i.ibb.co/BGf7Yvr/Ellipse-5.png",
    },
    {
      id: "05",
      name: "Muhammad Jaza",
      job: "SMK3",
      tema: "Tema: “Kepatuhan Perusahaan Terhadap program kesehatan Kerja””",
      poto: "https://i.ibb.co/JkzLMx5/Ellipse-3.png",
    },
  ];

  return (
    <>
      {loader ? (
        <div className={styles.loading}>
          <img
            src="https://cdn.pixabay.com/animation/2022/10/13/17/11/17-11-39-799_512.gif"
            alt=""
          />
        </div>
      ) : (
        <main className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.logos}>
              <img src="/logos.png" alt="logos" />
            </div>

            <AnimationOnScroll animateIn="animate__bounceIn" className={styles.opening}>
              <p>Dengan Hormat,</p>
              <p>
                Kami PT. Rumah Sakit Pelabuhan mengundang Bapak dan ibu dapat
                menghadiri acara Launcing Occupational Helth Center RS Pelabuhan
                pada:
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceIn" className={styles.date}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 27.2C0 29.92 2.08 32 4.8 32H27.2C29.92 32 32 29.92 32 27.2V14.4H0V27.2ZM27.2 3.2H24V1.6C24 0.64 23.36 0 22.4 0C21.44 0 20.8 0.64 20.8 1.6V3.2H11.2V1.6C11.2 0.64 10.56 0 9.6 0C8.64 0 8 0.64 8 1.6V3.2H4.8C2.08 3.2 0 5.28 0 8V11.2H32V8C32 5.28 29.92 3.2 27.2 3.2Z"
                  fill="black"
                />
              </svg>
              <p>Rabu, 05 Juli 2023</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C7.16385 0 0 7.16385 0 16C0 24.8362 7.16385 32 16 32C24.8362 32 32 24.8362 32 16C32 7.16385 24.8362 0 16 0ZM23.3846 18.4615H16C15.6736 18.4615 15.3605 18.3319 15.1297 18.1011C14.8989 17.8702 14.7692 17.5572 14.7692 17.2308V6.15385C14.7692 5.82743 14.8989 5.51438 15.1297 5.28356C15.3605 5.05275 15.6736 4.92308 16 4.92308C16.3264 4.92308 16.6395 5.05275 16.8703 5.28356C17.1011 5.51438 17.2308 5.82743 17.2308 6.15385V16H23.3846C23.711 16 24.0241 16.1297 24.2549 16.3605C24.4857 16.5913 24.6154 16.9044 24.6154 17.2308C24.6154 17.5572 24.4857 17.8702 24.2549 18.1011C24.0241 18.3319 23.711 18.4615 23.3846 18.4615Z"
                  fill="black"
                />
              </svg>
              <p>09.00 - 13.00 WIB</p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" className="maps">
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.800886114178!2d106.90760237605087!3d-6.157416560352461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f534ec09dbff%3A0x45cf793ab9f9133f!2sHARRIS%20Hotel%20%26%20Conventions%20Kelapa%20Gading!5e0!3m2!1sen!2sid!4v1687955090925!5m2!1sen!2sid"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" className={styles.opening} id="location">
              <p>
                <span> HARRIS Hotel & Conventions Kelapa Gading</span> <br />{" "}
                Jl. Boulevard Bar. Raya No.RT.13, RT.13/RW.18, Klp. Gading Tim.,
                Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240
              </p>
              <div>
                <a
                  href="https://goo.gl/maps/mjUnyoQr1dzbLj7W7"
                  className={styles.mapLink}
                >
                  <svg
                    width="51"
                    height="45"
                    viewBox="0 0 51 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5 0C19.3384 0 14.3438 4.95791 14.3438 11.0742C14.3438 16.0189 21.6352 25.0312 24.4286 28.3025C24.9944 28.9652 26.0065 28.9652 26.5714 28.3025C29.3648 25.0312 36.6562 16.0189 36.6562 11.0742C36.6562 4.95791 31.6616 0 25.5 0ZM1.78146 18.98C1.25568 19.1887 0.804959 19.5491 0.48743 20.0145C0.169901 20.4799 0.000125925 21.0291 0 21.5912L0 43.592C0 44.5869 1.01203 45.2672 1.9426 44.898L14.1667 39.375V18.8895C13.384 17.485 12.7438 16.1174 12.2852 14.8096L1.78146 18.98ZM25.5 31.6116C24.2542 31.6116 23.0757 31.0685 22.2673 30.121C20.5266 28.0819 18.6752 25.7599 17 23.378V39.3741L34 44.9991V23.3789C32.3248 25.7599 30.4743 28.0828 28.7327 30.1219C27.9243 31.0685 26.7458 31.6116 25.5 31.6116ZM49.0574 14.1645L36.8333 19.6875V45L49.2185 40.0825C49.7444 39.8739 50.1952 39.5136 50.5127 39.0481C50.8303 38.5827 51 38.0334 51 37.4713V15.4705C51 14.4756 49.988 13.7953 49.0574 14.1645Z"
                      fill="white"
                    />
                  </svg>
                  <p>Lihat Detail Lokasi</p>
                </a>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown" className={styles.saHead}>
              <h2>Dengan susunan acara sebagai berikut:</h2>
              <div className={styles.lines}></div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" className={styles.tables}>
              <Table />
            </AnimationOnScroll>
          </div>

          <AnimationOnScroll animateIn="animate__fadeInUp" className={styles.speker}>
            <div className={styles.spWrap}>
              <div className={styles.headS}>
                <h2>Pembicara</h2>
                <div className={styles.hairlines}></div>
              </div>

              <div className={styles.spItems}>
                {pembicara.map((item) => (
                  <div className={styles.item} key={item.id}>
                    <div className={styles.fotoW}>
                      <img src={item.poto} alt="" />
                    </div>

                    <div className={styles.desc}>
                      <h2>{item.name}</h2>
                      <h3>{item.job}</h3>
                      <p>{item.tema}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimationOnScroll>

          <footer className={styles.footer}>
            <p>Contact person: </p>
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.6312 5.63L27.9612 7.1C28.0112 7.323 28.0112 7.544 27.9692 7.752C28.0071 7.8997 28.0106 8.05409 27.9796 8.20337C27.9486 8.35265 27.8838 8.49286 27.7903 8.61328C27.6968 8.73371 27.577 8.83116 27.4401 8.89818C27.3032 8.96521 27.1527 9.00004 27.0002 9H24.7452L23.2622 7.023V7.021C23.0249 6.7035 22.7167 6.44584 22.3622 6.26857C22.0077 6.09131 21.6166 5.99934 21.2202 6H21.0002V4.31C21.0002 3.588 20.4122 3 19.6902 3H18.3102C17.5882 3 17.0002 3.588 17.0002 4.31V5.99H11.0002V4.31C11.0002 3.588 10.4122 3 9.69024 3H8.31024C7.58824 3 7.00024 3.588 7.00024 4.31V6H6.78024C5.97224 6 5.21724 6.381 4.73024 7.03L3.25424 9H1.00024C0.847776 9.00004 0.697323 8.96521 0.560383 8.89818C0.423442 8.83116 0.30364 8.73371 0.210137 8.61328C0.116633 8.49286 0.0519042 8.35265 0.0208979 8.20337C-0.0101085 8.05409 -0.00657101 7.8997 0.03124 7.752C-0.0125382 7.53658 -0.0098106 7.31429 0.0392401 7.1L0.35924 5.63C0.715724 4.03367 1.60519 2.60632 2.88118 1.58299C4.15716 0.559657 5.74359 0.00134984 7.37924 0H20.6212C22.2561 0.000159152 23.8419 0.558229 25.1166 1.58194C26.3912 2.60566 27.2783 4.03371 27.6312 5.63Z"
                fill="#3D3D3C"
              />
              <path
                d="M22.4602 7.62L26.1202 12.5C27.3407 14.1232 28.0005 16.0991 28.0002 18.13V21.44C28.0002 22.3 27.3002 23 26.4402 23H1.56024C0.700244 23 0.000244141 22.3 0.000244141 21.44V18.13C0.000244141 16.1 0.660244 14.12 1.88024 12.5L5.53024 7.63C5.83024 7.23 6.29024 7 6.78024 7H7.69024C7.86024 7 8.00024 6.86 8.00024 6.69V4.31C8.00024 4.14 8.14024 4 8.31024 4H9.69024C9.86024 4 10.0002 4.14 10.0002 4.31V6.69C10.0002 6.86 10.1402 7 10.3102 7H17.6902C17.8602 7 18.0002 6.86 18.0002 6.69V4.31C18.0002 4.14 18.1402 4 18.3102 4H19.6902C19.8602 4 20.0002 4.14 20.0002 4.31V6.69C20.0002 6.86 20.1402 7 20.3102 7H21.2202C21.7102 7 22.1702 7.23 22.4602 7.62ZM11.6982 12C11.8682 12 12.0092 11.86 11.9992 11.688V10.312C11.999 10.2295 11.9662 10.1504 11.9079 10.092C11.8497 10.0336 11.7707 10.0005 11.6882 10H10.3112C10.1412 10 10.0002 10.14 10.0002 10.312V11.688C10.0002 11.859 10.1402 12 10.3222 12H11.6982ZM14.6982 12C14.7388 12.0003 14.7791 11.9924 14.8165 11.9767C14.8539 11.961 14.8878 11.9378 14.916 11.9087C14.9443 11.8795 14.9663 11.8449 14.9808 11.807C14.9952 11.769 15.0019 11.7286 15.0002 11.688V10.312C14.9997 10.2294 14.9667 10.1504 14.9083 10.092C14.8499 10.0336 14.7708 10.0005 14.6882 10H13.3122C13.2296 10.0003 13.1504 10.0332 13.0919 10.0917C13.0335 10.1501 13.0005 10.2293 13.0002 10.312V11.688C13.0002 11.859 13.1402 12 13.3222 12H14.6982ZM16.3212 12H17.6982C17.7388 12.0003 17.7791 11.9924 17.8165 11.9767C17.8539 11.961 17.8878 11.9378 17.916 11.9087C17.9443 11.8795 17.9663 11.8449 17.9808 11.807C17.9952 11.769 18.0019 11.7286 18.0002 11.688V10.312C17.9997 10.2294 17.9667 10.1504 17.9083 10.092C17.8499 10.0336 17.7708 10.0005 17.6882 10H16.3112C16.1412 10 16.0002 10.14 16.0002 10.312V11.688C16.0002 11.859 16.1402 12 16.3222 12H16.3212ZM11.6982 15C11.8682 15 12.0092 14.86 11.9992 14.688V13.312C11.999 13.2295 11.9662 13.1504 11.9079 13.092C11.8497 13.0336 11.7707 13.0005 11.6882 13H10.3112C10.1412 13 10.0002 13.14 10.0002 13.312V14.688C10.0002 14.859 10.1402 15 10.3222 15H11.6982ZM13.3212 15H14.6982C14.7388 15.0003 14.7791 14.9924 14.8165 14.9767C14.8539 14.961 14.8878 14.9378 14.916 14.9087C14.9443 14.8795 14.9663 14.8449 14.9808 14.807C14.9952 14.769 15.0019 14.7286 15.0002 14.688V13.312C14.9997 13.2294 14.9667 13.1504 14.9083 13.092C14.8499 13.0336 14.7708 13.0005 14.6882 13H13.3122C13.2296 13.0003 13.1504 13.0332 13.0919 13.0917C13.0335 13.1501 13.0005 13.2293 13.0002 13.312V14.688C13.0002 14.859 13.1392 15 13.3212 15ZM17.6982 15C17.7388 15.0003 17.7791 14.9924 17.8165 14.9767C17.8539 14.961 17.8878 14.9378 17.916 14.9087C17.9443 14.8795 17.9663 14.8449 17.9808 14.807C17.9952 14.769 18.0019 14.7286 18.0002 14.688V13.312C17.9997 13.2294 17.9667 13.1504 17.9083 13.092C17.8499 13.0336 17.7708 13.0005 17.6882 13H16.3112C16.1412 13 16.0002 13.14 16.0002 13.312V14.688C16.0002 14.859 16.1402 15 16.3222 15H17.6982ZM10.3212 18H11.6982C11.8682 18 12.0092 17.86 11.9992 17.688V16.312C11.999 16.2295 11.9662 16.1504 11.9079 16.092C11.8497 16.0336 11.7707 16.0005 11.6882 16H10.3112C10.1412 16 10.0002 16.14 10.0002 16.312V17.688C10.0002 17.859 10.1392 18 10.3212 18ZM14.6982 18C14.7388 18.0003 14.7791 17.9924 14.8165 17.9767C14.8539 17.961 14.8878 17.9378 14.916 17.9087C14.9443 17.8795 14.9663 17.8449 14.9808 17.807C14.9952 17.769 15.0019 17.7286 15.0002 17.688V16.312C14.9997 16.2294 14.9667 16.1504 14.9083 16.092C14.8499 16.0336 14.7708 16.0005 14.6882 16H13.3122C13.2296 16.0003 13.1504 16.0332 13.0919 16.0917C13.0335 16.1501 13.0005 16.2293 13.0002 16.312V17.688C13.0002 17.859 13.1402 18 13.3222 18H14.6982ZM16.3212 18H17.6982C17.7388 18.0003 17.7791 17.9924 17.8165 17.9767C17.8539 17.961 17.8878 17.9378 17.916 17.9087C17.9443 17.8795 17.9663 17.8449 17.9808 17.807C17.9952 17.769 18.0019 17.7286 18.0002 17.688V16.312C17.9997 16.2294 17.9667 16.1504 17.9083 16.092C17.8499 16.0336 17.7708 16.0005 17.6882 16H16.3112C16.1412 16 16.0002 16.14 16.0002 16.312V17.688C16.0002 17.859 16.1402 18 16.3222 18H16.3212Z"
                fill="#3D3D3C"
              />
            </svg>
            <p>
              Afrianti Handayani +62 857-2626-9696 - Vega Setyo ningrum +62
              812-1355-5360
            </p>
          </footer>
        </main>
      )}
    </>
  );
};

export default Undangan;
