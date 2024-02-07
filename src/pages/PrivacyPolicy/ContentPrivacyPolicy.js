import React from 'react';
import PropTypes from 'prop-types';

const ContentPrivacyPolicy = props => {
  return (
    <div>
      <h1 className="text-center text-[30px] mb-4 text-gray-800 mt-1"> Privacy Policy</h1>
      <p className='p-20'>Kami berkomitmen untuk menjaga informasi pribadi Anda yang Kami dapatkan dari penggunaan EDOT.<br /><br />

        Dengan mengakses EDOT berarti, Anda:

        <ul className='list-decimal'>
          <li>
            Menyetujui bahwa data Anda secara pribadi akan dimiliki oleh Kami dan masuk ke dalam database Kami yang akan digunakan sesuai dengan kebijakan kerahasiaan;
          </li>
          <li>
            Menyetujui untuk memberikan informasi akurat, terkini dan lengkap yang diperlukan untuk mendaftarkan layanan dan dalam hal lain yang diperlukan selama waktu penggunaan layanan dan memperbaharui data pendaftaran yang diperlukan untuk menjaga data tersebut tetap akurat, terkini dan terlengkap.
          </li>
          <li>
            Menyetujui setiap data dari hasil transaksi ataupun unduhan yang Anda lakukan akan direkam untuk kepentingan Kami;
          </li>
          <li>
            Informasi yang Kami simpan untuk mendukung perbaikan yang mungkin dilakukan dalam menyediakan layanan untuk Anda.
          </li>
        </ul>
      </p>

    </div>
  );
};

ContentPrivacyPolicy.propTypes = {

};

export default ContentPrivacyPolicy;