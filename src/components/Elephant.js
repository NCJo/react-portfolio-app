import React, { Component } from 'react';
import social_elephant from '../assets/social_elephant.png';
import logo from '../assets/logoElephant.png';
import banner from '../assets/elephant_banner.gif';
import office from '../assets/office.jpg';
import colorelephant from '../assets/colorelephant.png';


export default class Elephant extends Component {
    render() {

        return (
            <div>
            <h2>Just like the website! (with a bit of tilt)</h2>
            <h5>go ahead, click any link</h5>
            <div className='white-bg'>
                <div className='vertical-title'>
                    <a href='https://colorelephant.com/'><img id='logo-elephant' src={logo} alt='logo'/></a>
                    <p className='vertical-writing' id='menu-text'>
                        <a href='https://colorelephant.com/about-us/'>ABOUT US</a>
                        <a href='https://colorelephant.com/services/'>SERVICES</a>
                        <a href='https://colorelephant.com/why-us/'>WHY US?</a>
                        <a href='https://colorelephant.com/colorelephant-promise/'>OUR PROMISE</a>
                        <a href='https://colorelephant.com/blog/'>OUR BLOG</a>
                        <a href='https://colorelephant.com/contact-us/'>CONTACT US</a>
                        <a href='http://colorelephant.com/hiring'>WE ARE HIRING</a>
                    </p>
                    
                </div>
                <div className='vertical-header'>
                    <p className='vertical-writing' id='header-text'>
                        INTERESTED IN WORKING TOGETHER?<span id='call-us'>&nbsp;<a href='http://colorelephant.com/contact-us/'>GIVE US A CALL!</a></span>
                    </p>
                    <img id='social' src={social_elephant} alt='instagram_facebook'/>
                </div>
                <div className='banner'>
                    <img id='main-banner' src={banner}/>
                    <p id='we-are'>WE'RE IN THE BUSINESS</p>
                    <p id='helping'>OF HELPING</p>
                    <p id='business'>BUSINESSES</p>
                    <p id='we-are-colorelephant'>We are ColorElephant</p>
                    <p id='digital-studio'>A digital studio based out of Portugal working with clients globally creating</p>
                    <p id="technology">technology to support their marketing and operational efforts.</p>
                    <div id='button1'><a href='http://colorelephant.com/services/'><span className='vertical-writing' id='see-what'>SEE WHAT WE DO</span></a></div>
                    <div id='button2'><a href='http://colorelephant.com/about-us'><span className='vertical-writing' id='about-us'>ABOUT US</span></a></div>   
                </div>
                <div className='main-paragraph'>
                    <p id='an-unique'>An unique combination</p>
                    <p id='at-colorelephant'>At ColorElephant we combine raw passion with talent, brains and</p>
                    <p id='hearts-to'>hearts to create digital products for our clients. We are your partner</p>
                    <p id='if-you'>if you want a committed team of designers, coders and project</p>
                    <p id='managers'>managers to handle your next project. We build internal software</p>
                    <p id='CRM'>(CRM, POS, ERP, etc), Facebook Applications, Chat Bots, software</p>
                    <p id='integration'>integration (your POS and your CRM need to speak to each other,</p>
                    <p id='right'>right?), online stores and more from sunny Porto, Portugal. We’re</p>
                    <p id='creative'>creative but also KPI-driven, we don’t overcharge and we follow a</p>
                    <p id='series'>series of <a href='http://colorelephant.com/colorelephant-promise/'>principles</a> while working with anyone – want to try? <a href='http://colorelephant.com/contact-us/'>Get in</a></p>
                    <p id='touch'><a href='http://colorelephant.com/contact-us/'>touch.</a></p>
                </div>
                <img id='office' src={office}></img>
                <div className='sub-paragraph'>
                    <p id='our-work'>Our Work</p>
                    <p id='we-have'>We have been fortunate enough to work with these fine brands below and many more. We work with them to create compelling digital</p>
                    <p id='products'>products to support their marketing and their operational goals. If you’d like to know more about what’ve done and how e can help you</p>
                    <p id='please'>please get in touch.</p>
                </div>
                <div id='screenshot'>
                <h2>Screenshot!</h2>
                <img src={colorelephant} />
            </div>
            </div>
            
                
            </div>
        )
    }
}