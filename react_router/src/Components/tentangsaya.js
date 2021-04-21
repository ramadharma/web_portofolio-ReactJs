import React from 'react'
import Media from './media';

class TentangSaya extends React.Component {
    render() {
        return(
            <div>

            <div class="parent_foto">
                <div class="fotoku" >
                    <Media image="fotoku.png"></Media>
                </div>
            </div>

            <div class="parent_tentang">
                <div class="childern_tentang">

                    <div class="judul_tentangsaya">
                        <h1>Helo, I'm Rama!</h1>
                    </div>

                    <div class="desc_tentangsaya">
                        <p>
                            What's Up Everyone! My name is Rama Dharma Putra Sutanto, U can call me 'Rama'. I was turn at this earth since 29 August 2003.
                            Now I was 17yo, actually I'm in Senior Highschool. I study at SMK Telkom Malang, it was one each of favorite IT School
                            in Indonesia, it was LIT maybe wkwkw. Oh... btw this is my 'Portofolio Website', U can turn around with some of my work. Thank's fully for your come's,
                            and I hope u enjoy it!
                        </p>
                    </div>

                </div>
            </div>


            </div>
        )
    }
}

export default TentangSaya;