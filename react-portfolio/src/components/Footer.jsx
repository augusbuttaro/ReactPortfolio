import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const socialMedia = [
    {name: "Instagram",
    text: "augusbuttaro",
     img: faInstagram,
     link: "https://www.instagram.com/augusbuttaro/"},
     {name: "Twitter",
     text: "@augusbuttaro",
     img: faTwitter,
     link: "https://twitter.com/augusbuttaro"},
     {name: "E-Mail",
     text: "augusbuttaro@gmail.com",
     img: faEnvelope,
     link: "mailto:augusbuttaro@gmail.com"},
    {name: "LinkedIn",
    text: "Augusto Buttaro",
     img: faLinkedin,
     link: "https://www.linkedin.com/in/augusto-buttaro-6357552aa/"}
  ]

    return (
    <div className='bg-pink-ten w-screen py-2 mt-24 px-[10%] h-fit mx-auto flex align-center justify-around'>
        {socialMedia.map((media) =>{
            return(
                <div className='flex gap-4 self-center' key={media.name}>
                    <FontAwesomeIcon icon={media.img} className="self-center" size="xl" style={{color: "#B197FC",}} />
                    <a target='_blank' className='self-center ' href={media.link}><p className='text-white m-0 text-lg'>{media.text}</p></a>
                </div>
            )
        })}
    </div>
  )
}

export default Footer