import React from 'react';

const navbar = () => {
  let Links =[
    {name: 'Home', Link:"/"},
    {name: 'About Us', Link:"/"},
    {name: 'Services', Link:"/"},
    {name: 'Our Work', Link:"/"},
    {name: 'Spotlight', Link:"/"},
    {name: 'Blog', Link:"/"},
    {name: 'Contact Us', Link:"/"},
    {name: "Faq's", Link:"/"},
  ];
  return (
    <nav>
      <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex bg-white py-4 md:px-10 px-7 '>
      <ul>
        <li>
          <a href={Link.link}>{Link.Home}</a>
          </li>
        {/* <li><a href="aboutus.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="our-work.html">Our Work</a></li> */}
      </ul>
      <Link
          to="/" className='' onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src="./public/favicon.ico" className="" />
        </Link>
      {/* <ul class="nav navbar-nav navbar-right">
        <li><a href="spotlight.html">Spotlight</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact-us.html">Contact Us</a></li>
        <li><a href="faqs.html">Faq's</a></li>	        
      </ul> */}
      {/* <ul>
        {
          Links.map((Link)=>(
            <li>
              <a href="Link.link">{Link.name}</a>
            </li>
          ))
        }
      </ul>
      <img src="public/favicon.ico" alt="icon" />
      <ul >
        <li>Spotlight</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Faq's</li>	        
      </ul> */}
    </div>
      </div>
    </nav>
  )
}

export default navbar
