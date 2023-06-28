import React from "react";

const Table = () => {
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th style={{ width: 150 }}>Waktu</th>
            <th>Kegiatan</th>
            <th style={{ width: 150 }}>PIC</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg_white">
            <td>08.00 - 08.30</td>
            <td>Registrasi peserta</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_grey">
            <td>08.30 - 08.35</td>
            <td>Opening Ceremonial Sekaligus membaca doa</td>
            <td>MC</td>
          </tr>

          <tr className="bg_white">
            <td>08.35 - 08.37</td>
            <td>Menyanyikan Indonesia Raya</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_grey">
            <td>08.37 - 08.39</td>
            <td>Pemutaran Video Safety Momment HSSE</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_white">
            <td>08.39 - 08.41</td>
            <td>Pemutaran Video AKHLAk</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_grey">
            <td>08.41 - 08.43</td>
            <td>Pemutaran Video Safety Induction</td>
            <td>Hotel</td>
          </tr>

          <tr className="bg_white">
            <td>08.43 - 08.48</td>
            <td>Sambutan Direktur RS Pelabuhan</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_grey">
            <td>08.48 - 09.03</td>
            <td>Sambutan Direktur PT Pelabuhan Indonesia (Persero)</td>
            <td>MC</td>
          </tr>

          <tr className="bg_white">
            <td>09.03 - 09.18</td>
            <td>Sambutan Direktur Utama PT Pertamina Bina Medika IHC</td>
            <td>MC</td>
          </tr>

          <tr className="bg_grey">
            <td>09.18 - 09.33</td>
            <td>Launching ‘OHC RSP’</td>
            <td>MC</td>
          </tr>

          <tr className="bg_white">
            <td>09.33 - 09.38</td>
            <td>
              Penandatanganan Buku OHC_RSP oleh Direktur PT RS Pelabuhan dan
              Penyerahan Buku OHC_RSP secara Simbolis
            </td>
            <td>MC</td>
          </tr>

          <tr className="bg_white">
            <td></td>
            <td>
              kepada Direktur PT Pelabuhan Indonesia (Persero) dan PT Pertamina
              Bina Mediaka IHC
            </td>
            <td></td>
          </tr>

          <tr className="bg_grey">
            <td>09.38 - 09.48</td>
            <td>Pemutaran Video OHC-RSP</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_white">
            <td>09.48 - 09.58</td>
            <td>Coffe Break</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_grey">
            <td>09.58 - 10.03</td>
            <td>Main Ceremony - Seminar OHC-RSP 2 Sesi - 5 Narasumber</td>
            <td>MC</td>
          </tr>

          <tr>
            <td></td>
            <td>Sesi I</td>
            <td>Moderator ( dr. Alvin M Ridwan Sp. OK)</td>
          </tr>

          <tr className="bg_grey">
            <td>10.03 - 10.23</td>
            <td>Narasumber 1 : “Kebijakan Penerapan K# Di Perusahaan”</td>
            <td>Dr.dr. Sudi Astono, MS (KEMENAKER)</td>
          </tr>

          <tr>
            <td>10.23 - 10.43</td>
            <td>
              Narasumber 2 : “Peran dan fungsi Pelayanan Kesehatan Kerja Untuk
              Perusahaan”
            </td>
            <td>Dr.dr. Dewi Soemarko, MS, Sp.OK (PERDOKI)</td>
          </tr>

          <tr className="bg_grey">
            <td>10.43 - 11.03</td>
            <td>Diskusi</td>
            <td>Moderator (dr. Alvin M Ridwan Sp. OK)</td>
          </tr>

          <tr>
            <td>11.03 - 11.08</td>
            <td>Penyerahan Plakat Pembicara</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_grey">
            <td></td>
            <td>Sesi II</td>
            <td>Moderator ( dr. Alvin M Ridwan Sp. OK)</td>
          </tr>

          <tr>
            <td>11.08 - 11.28</td>
            <td>Narasumber 3 : “Program Jaminan Kecelakaan Kerja”</td>
            <td>BPJS Ketenagakerjaan</td>
          </tr>

          <tr className="bg_grey">
            <td>11.28 - 11.48</td>
            <td>
              Narasumber 4 : “Kepatuhan Perusahaan Terhadap Program Kesehatan
              kerja”
            </td>
            <td>Bapak Muhammad Jaza</td>
          </tr>

          <tr>
            <td>11.48 - 12.08</td>
            <td>
              Narasumber 5 : “Perogram Occupational Health Center PT RS
              Pelabuhan”
            </td>
            <td>dr. Iwan Siahaan, Sp.OK</td>
          </tr>

          <tr className="bg_grey">
            <td>12.08 - 12.28</td>
            <td>Diskusi</td>
            <td>Moderator ( dr. Alvin M Ridwan Sp. OK)</td>
          </tr>

          <tr>
            <td>12.28 - 12.33</td>
            <td>Penyerahan Plakat</td>
            <td>Panitia</td>
          </tr>

          <tr className="bg_grey">
            <td>12.33 - 12.38</td>
            <td>Doorprize untuk 10 penanya terbaik</td>
            <td>MC</td>
          </tr>

          <tr>
            <td>12.38 - 12.43</td>
            <td>Foto Bersama dan ramah Tamah</td>
            <td>MC</td>
          </tr>

          <tr className="bg_grey">
            <td>12.43 - 12.48</td>
            <td>Penutupan Acara</td>
            <td>MC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
