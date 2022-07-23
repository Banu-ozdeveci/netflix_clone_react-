import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
import {useState} from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
window.onscroll = ()=> {
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => window.onscroll  =null;
}

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
        <div className="left">
        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+JIh2VIh62ISGgIh+MIh2bIh+9ISHIICJ1IhtqIhp7IhzOICNvIhsAGxYYGxcLGxfvHiVlHBsUGxfpHiU2HBgyHBgtHBhIHxldHhtOHhoAFBErKiZWHhvYHyMmGxj5HyZyGRk1ExA8FhI/ExEeFBFSExMmFRB7GRkqEhAgL5HNAAAEjElEQVR4nO3ci3LaOhAGYDv4ItmSbTCWwCYJuDElaQJ9/6erMZcY79Kc00rLdIY/nWQ6dcI3uyAtItT59nDbfHMeRrfNQytwbpm74C64C+6Cf05Qahg1uEapkRqN1PFj/2l4xV8Iyuc5zHpwA4vHYRbDS/5cULAZyPdN0b9EPY1Bps+lKYF+adxhqqQmFJTPUQUI7mu/xtZrwKCgEv0i2BYsJ0gb0rr3nfYFHlKEt94NqKepXUEQQMGM99rQCkAyo4JpAwhV3muDdQGbhEgbfnzegn0B2gb52QYCQZbCFaF5Py8JBAKsDbMPTSgIAliDyju3gUKQJbAIzfbUBvWUgUxMCkTAAok8GjanNtgXMMYCZGWOTm2gESBtqE6LEomAiRkU7I5FUI8T+wKRIY+G5CywXYN9AmxO+VkeBZPs8HH4sv8UGBTMeUfgEDDbFScBiAUBMqe4aX1dsDIuCHykDYebIRIIcXVOoRKwHD4a8lpdETCDgvFJgM0p3QZJJRAMeTTEdScIbAqKk4AjbXCbfRvUIgAxKpD8EBHClXn2UXY1oBFwbE7xa0oBQ8ZFt20DnYDHEPB9rq0LpmeBvNIG64JYnsKQOcV9LdWCAYF4MVmDc7A2VLuiFYAYFXzWQAr0iTwqWOkvf/QfCZA5pXotCQUc2SArUSwEEPAXOwK0DXlNKeDInFK9PVoWhPFnJMfmlLUAsSaIRQ4J+ZYRCiR2rLUMCAUxMrVXYUYoCDl2nrKxK/DCfqSHFEEEfCCQ9gQh1oY0synIhgKsDbthF2wK4hjZoiXjl7EpCDm2MmcDQWxTIBNYg9lGWBT43mVC7FgrHrQhXloUeMiTJzfdUQpi7DyFtAYeMi7OPCb7sSwQ2JIwsSbYQIHcIWd77RrQS2hQMIGCcAVrUEWBLcEm8ofx1sh9saEU+OvNV20w2gVE8KSQNiSMUPBYY2d7QW+S8WwL9BxpQ/u8kk5Q1i4sQiKoBJH/qNA2MEuCJBqmFeg5BMxCHtIJnBo76RbnIcI3KAigINoLJLwvNjwmFJQrZEnwOaFAjbANkp0Fc7uChWr/AXvxi9MIkk6gtlDgRvK4ffpj+wKnxl4KFkdBRNAFR2NzigxtCEAOArVFpvbk2IbIZBdSSOgEeBs4pUBjc0oYGhewqwK1RVbmYxtoBA62QTbysH/SCPQcuS+2awGdQL1jJ91dERKjApCTwCmQF7/cg8DgevA7gX5BBL5HKGjnFOSIVZIK0HNmSkH5iixKkdfuXiYFOSScBU6NnXSHlIICedXFJa1B+QMCqsQjFOAbZBgl0+I3P/T/CcQXAmSDdP22BhYF+YVALSDATb3Ubg3ynsCpsfMUs4ImB+kL9BhrA6VA1cijIY8IBU6BPZH3KQXlElmZTc4HfUGTN+3fmvRCoNoNsnK7P10O90WDK5JouqRJ5EkxmS5Xz4v15SWl+vm2+phvdoJ7Udo07v59HgYFU7kbrxZrXXTRuizB22SUKtvooj7k/W2+88wJHI3f6vW0Hq2L//ArGP/O+5nugrvgLrgL7gI6wa3f+3/z///gFzdC9n+a9NXnAAAAAElFTkSuQmCC" />
   <span>Homepage </span>
   <span>Series </span>
   <span>Movies </span>
   <span>New and Popular </span>
   <span>My List </span>
        </div>
        <div className="right">
            <Search className="icon"/>
            <span>KID</span>
            <Notifications className="icon"/>
            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTqDINPrjJf9udj8bnbKOQZdCgWwzGJiKSg&usqp=CAU"/>
       
       <div className="profile">
       <ArrowDropDown className="icon"/>
       <div className="options">
        <span>Settings</span>
        <span>Log out</span>
       </div>

       </div>
        </div>
        </div></div>
  )
}

export default Navbar