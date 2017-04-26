
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


class CenterCol extends Component {
  render() {
    return (
      <div>


        {/* START MAIN PROMO1 */}
        <h3>Featured Author:</h3>
        <div className="media">
          <div className="media-left media-top">
            <a href="https://www.amazon.com/gp/search?ie=UTF8&tag=mcc031-20&linkCode=ur2&linkId=caf14c95e55d8e647847ec051d769116&camp=1789&creative=9325&index=books&keywords=B V Larson" target="_BLANK">
              {/*
              <img className="media-object" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=BOOK OR AUTHOR&w=300&h=300" />
              */}
              <img alt="" className="media-object thumbnail featured_media_image" src="/images/bvlarson.jpg" />
            </a>
          </div>
          <div className="media-body">
            <h4>B. V. Larson</h4>
            B. V. Larson has authored more than fifty books with over two million copies sold. His fiction regularly tops the bestseller charts. He writes in several genres, but most of his work is Science Fiction. Many of his titles have been professionally produced as audiobooks and print as well as ebook form. Eight of them have been translated into other languages and distributed by major publishers in foreign countries. He writes college textbooks in addition to fiction, and his three-book series on computer science is currently in its sixth edition.
            <p></p>
            <p><a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=mcc031-20&linkCode=ur2&linkId=caf14c95e55d8e647847ec051d769116&camp=1789&creative=9325&index=books&keywords=B V Larson">See books by B. V. Larson</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=mcc031-20&l=ur2&o=1" width="1" height="1" alt="" /></p>
          </div>
        </div>
        {/* END MAIN PROMO1 */}

        <h3>Featured Book:</h3>
        <div className="media">
          <div className="media-left media-top">
            <a href="https://www.amazon.com/gp/product/0441569595/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0441569595&linkCode=as2&tag=mcc031-20&linkId=14f6695c1d1550f040d8ef110db436a5" target="_BLANK">
              {/*
              <img className="media-object" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=BOOK OR AUTHOR&w=300&h=300" />
              */}
              <img alt="" className="media-object thumbnail featured_media_image" src="/images/neuromancer.jpg" />
            </a>
          </div>
          <div className="media-body">
            <h4>Neuromancer</h4>
            Twenty years ago, it was as if someone turned on a light. The future blazed into existence with each deliberate word that William Gibson laid down. The winner of Hugo, Nebula, and Philip K. Dick Awards, Neuromancer didn't just explode onto the science fiction scene it permeated into the collective consciousness, culture, science, and technology.

            Today, there is only one science fiction masterpiece to thank for the term "cyberpunk," for easing the way into the information age and Internet society. Neuromancer's virtual reality has become real. And yet, William Gibson's gritty, sophisticated vision still manages to inspire the minds that lead mankind ever further into the future.
            <p></p>
            <p><a target="_blank" href="https://www.amazon.com/gp/product/0441569595/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0441569595&linkCode=as2&tag=mcc031-20&linkId=14f6695c1d1550f040d8ef110db436a5">See on Amazon.com</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=mcc031-20&l=am2&o=1&a=0441569595" width="1" height="1" alt="" /></p>
          </div>
        </div>


      </div>
    )
  }
}

export default CenterCol;




