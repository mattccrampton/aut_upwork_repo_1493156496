
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FeaturedContent extends Component {
  render() {
    return (
      <div>


        <h3>Featured Book:</h3>
        <div className="media">
          <div className="media-left media-top">
            <Link to="/book/0441569595">
              {/*
              <img className="media-object" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=BOOK OR AUTHOR&w=300&h=300" />
              */}
              <img alt="" className="media-object thumbnail featured_media_image" src="/images/neuromancer.jpg" />
            </Link>
          </div>
          <div className="media-body">
            <h4>Neuromancer</h4>
            Twenty years ago, it was as if someone turned on a light. The future blazed into existence with each deliberate word that William Gibson laid down. The winner of Hugo, Nebula, and Philip K. Dick Awards, Neuromancer didn't just explode onto the science fiction scene it permeated into the collective consciousness, culture, science, and technology.

            Today, there is only one science fiction masterpiece to thank for the term "cyberpunk," for easing the way into the information age and Internet society. Neuromancer's virtual reality has become real. And yet, William Gibson's gritty, sophisticated vision still manages to inspire the minds that lead mankind ever further into the future.
          </div>
        </div>


      </div>
    )
  }
}

export default FeaturedContent;





