import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Github from '../../../assets/Links/Github.png'
import SO from '../../../assets/Links/SO.svg'
import Spotify from '../../../assets/Links/Spotify.svg'
import "./Links.css"
export default function Links(){
	return (
		<div>
			<NavBar />

			<div className="banner-container">
				<div className="inner-banner-container">
					<h1>Links</h1>
				</div>
			</div>


			<div className="link-container">

				<div className="link-container-item">

					<div className="item-img">
						<a target="_blank"  rel="noopener noreferrer" href="https://github.com/BuddyBob"><img className="link-img" src={Github} alt="Github" /></a>
					</div>

					<div className="item-text">
					<a target="_blank"  rel="noopener noreferrer" href="https://github.com/BuddyBob"><h2 className="link-subtitle">Github</h2></a>
						<p>
							Find all my projects and there code in one location here<br/>
							Follow me here to get notified on my activity.
						</p>
					</div>

				</div>


				<div className="link-container-item">

					<div className="item-img">
					<a target="_blank"  rel="noopener noreferrer" href="https://stackoverflow.com/users/14222251/thavas-antonio?tab=topactivity"><img className="link-img" src={SO} alt="Stack Overflow" /></a>
					</div>

					<div className="item-text">
						<a target="_blank"  rel="noopener noreferrer" href="https://stackoverflow.com/users/14222251/thavas-antonio?tab=topactivity"><h2 className="link-subtitle">Stack Overflow</h2></a>
						<p>
							Stack Overflow is a large Q&A website for programmers. <br/>
							I have acquired around 5.5k+ reputations on Stack Overflow, reached 45k+ users, and answered over 500 questions.

						</p>
					</div>
				</div>


				<div className="link-container-item">

					<div className="item-img">
						<a target="_blank"  rel="noopener noreferrer" href="https://open.spotify.com/user/2nmd3owipgwg23x068udrgc2f?si=8e66653a44db4cfd"><img className="link-img" src={Spotify} alt="Spotify" /></a>
					</div>

					<div className="item-text">
						<a target="_blank"  rel="noopener noreferrer" href="https://open.spotify.com/user/2nmd3owipgwg23x068udrgc2f?si=8e66653a44db4cfd"><h2 className="link-subtitle">Spotify</h2></a>
						<p>
							For years I have been collecting songs on this account <br/>
							Here is my progress!
						</p>
					</div>
				</div>


			</div> 
		</div> 
	)
}
