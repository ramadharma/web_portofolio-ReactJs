import React from 'react'
// import { Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import img1 from "../img/logodotnet.png";
import img2 from "../img/wallpaper.jpg";
import img3 from "../img/file.jpg";
import img4 from "../img/lampu.jpeg";
import img5 from "../img/ppdb1.jpeg";
import img6 from "../img/ppdb2.jpeg";
import img7 from "../img/anda.jpeg";
import img8 from "../img/kakekcucu.jpeg";
import img9 from "../img/hujan.jpeg";
// import Media from './media';

class Karya extends React.Component {
    render() {
        return (
            <div class="container">

                <div class="head_karya">
                    <h1>Karya</h1>
                    <hr></hr>
                </div>

                    {/* CARD Desain */}
                    <div class="desain">
                        <h4>Design Graphic</h4>

                        <div class="container-fluid d-flex justify-content-center">
                            <div class="row">
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img1} alt="Imageeee 1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Logo Dotnet</h5>
                                            <p class="card-text">Ini project logo waktu di kelas X, dikerjakan menggunakan software Adobe Illustrator cc2019.</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img2} alt="Imagee 2" />
                                        <div class="card-body">
                                            <h5 class="card-title">Wallpaper</h5>
                                            <p class="card-text">Ini project wallpaper waktu di kelas X, dikerjakan menggunakan software Coreldraw 2019.</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img3} alt="Imageee 3" />
                                        <div class="card-body">
                                            <h5 class="card-title">Karakter Among Us</h5>
                                            <p class="card-text">Ini project 3D modeling waktu di kelas XI, dikerjakan menggunakan software Blender.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                {/* CARD Photography */}
                <div class="photography">
                        <h4>Photography</h4>

                        <div class="container-fluid d-flex justify-content-center">
                            <div class="row">
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img4} alt="Imageeee 1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Lampu</h5>
                                            <p class="card-text">Potret ini diambil di GOR Lembupeteng Tulungagung saat jogging pagi, diambil dengan kamera Hp Xaiomi Redmi note 7 dan diedit dengan Adobe Lightroom.</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img5} alt="Imagee 2" />
                                        <div class="card-body">
                                            <h5 class="card-title">PPDB 2020</h5>
                                            <p class="card-text">Potret ini diambil di SMK Telkom Malang saat acara PPDB angkatan 29 tahun 2020, diambil dengan kamera Lumix dan diedit dengan Adobe Lightroom.</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img6} alt="Imageee 3" />
                                        <div class="card-body">
                                            <h5 class="card-title">PPDB 2020</h5>
                                            <p class="card-text">Potret ini diambil di SMK Telkom Malang saat acara PPDB angkatan 29 tahun 2020, diambil dengan kamera Lumix dan diedit dengan Adobe Lightroom.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                        <div class="container-fluid d-flex justify-content-center">
                            <div class="row">
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img7} alt="Imageeee 1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Tuhan Menyertai Anda</h5>
                                            <p class="card-text">Potret ini diambil di kereta Dhoho Penataran saat perjalanan ke Malang tahun 2021, diambil dengan kamera Hp Xiaomi Redmi note 7 dan diedit dengan Adobe Lightroom.</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img8} alt="Imagee 2" />
                                        <div class="card-body">
                                            <h5 class="card-title">Kakek dan Cucu</h5>
                                            <p class="card-text">Potret ini diambil di kereta Dhoho Penataran saat perjalanan ke Tulungagung tahun 2021, diambil dengan kamera Hp Xiaomi Redmi note 7 dan diedit dengan Adobe Lightroom.</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">

                                    <div class="card">
                                        <img class="card-img-top" src={img9} alt="Imageee 3" />
                                        <div class="card-body">
                                            <h5 class="card-title">Hujan</h5>
                                            <p class="card-text">Potret ini diambil di daerah Srabah Tulungagung saat kehujanan tahun 2021, diambil dengan kamera Hp Xiaomi Redmi note 7 dan diedit dengan Adobe Lightroom.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                    </div>


            </div>
        )
    }
}

export default Karya;