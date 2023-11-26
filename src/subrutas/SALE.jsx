import React from'react';
import Tarjeta from '../Tarjeta';
import Menu from '../Menu';

export default function SALE(){
return(
    <div>
        <Menu/>
    <h1 className="Titulo">SALE 50% desc</h1>
        <hr/>
        <section className="cont1">
        <Tarjeta img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbCAA4_13wk1TpiotK4szqJGUEaM1ulh4Fb6vwMed1lz4OUlhVQ6IZ-Y0k_Q41SQPYs-whnQU6PcoOrQkkUbZ7KEE1_bdYcTpk1imPUTWTSq77SUfuAyRnHQ&usqp=CAE" alt="Borcegos" marca="Borcegos black"  precio="$20.000"/>
        <Tarjeta img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbC5d0DEJI7mEsNJfnZWIDKeWQDMmfFPdNCb91d1bVnJJh_a983YkdiX6owCnYpYq90zdxeKcCHIwFo4IOym-SyqB5wkr9Aam8oBuFQDQSAWL2TbVVKxFZ&usqp=CAE" alt="Campera" marca="Doble c black"  precio="$40.000"/>
        <Tarjeta img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGM9N291ES9NB4kLuiwugNQ3LtiS12zRxY1S5LwGEtvwRhnMjMffRCmJONmGXjqvcErZwGzwghKQMlYwxiv93seVj1bL8uGgTn7ei5V9vHx_f-2NWxIsIx&usqp=CAEs" alt="Medias" marca="Medias white"  precio="$2.000"/>
        <Tarjeta img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSemnQnGmKul-yX50hBv4eOMgbFT1Ff8hXFwwDckghJwei6wVe4LwiLIjFLqssiNp9EKN73eu9JQICfh7Bi1ARV25mTsMjv&usqp=CAE" alt="Medias" marca="Medias buzz lightyear"  precio="$2.500"/>
        </section>
        
        <br/>
        <br/>
        <br/>
        <br/>

        <section className="cont1">
        <Tarjeta img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiqnRvnL6qGWV5kX44DjgY-eQzp-yM3oNJ_nUQXxe53REV0eEr1LlElb4Se2I6XdQ71gYuAdiSl_QiM7iHLoKSTUvCd9VMYXH_7JGEl7VTQ53GNSkasHVdXQ&usqp=CAE" alt="Buzo Minnie" marca="Buzo Minnie"  precio="$10.000"/>
        <Tarjeta img="https://dcdn.mitiendanube.com/stores/576/100/products/68300606-7f36-406a-97a7-53817f8dfe261-3c99185fce7ca93be916834103369272-640-0.jpeg" alt="Pantalon" marca="Pintado a mano"  precio="$5.000"/>
        <Tarjeta img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxQCYSd0Uf7S2NU4-6L-fXe2BfpRu32A2Y0L2N0IjcBGR1AzR_Fe-JHz0pK8BMwREbjY&usqp=CAU" alt="Pantalon" marca="Pant corazones"  precio="$10.000"/>
        <Tarjeta img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBoL4dA4sxGRrDnjNO61jAGmztWJLcX5XLsttlElDws-17Oxu3NENXKjnpxb_tfUobUSwKB4fpUQlYiY9vqwmxA-P193Q-Z579SBYp0NKfFR1K9f4LYYqfZA&usqp=CAE" alt="Abrigo" marca="Disney 100 años"  precio="$30.000"/>
        </section>
    </div>
);
}