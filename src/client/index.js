import { postText } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import {getSentiment } from './js/nameChecker'
import { updateUI } from './js/nameChecker'
import { determineSentiment} from "./js/formHandler";
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import {facebook} from "./img/fb.png"
import {linkedin} from "./img/linkedin.png"
import {youtube} from "./img/youtube.jpg"
import {twitter} from "./img/twitter.png"
import {logo} from "./img/logo.jpg"







export{
    postText,
    handleSubmit, 
    getSentiment, 
    updateUI, 
    determineSentiment
}
