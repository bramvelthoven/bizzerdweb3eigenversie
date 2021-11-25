import validateURLHelper from "../../../utils/validateURL.helper";


const validLinkOnClick = (link: string): void => {

   if (validateURLHelper(link)) {
    const w = window.open(link, '_blank');
    if(w) {
        w.focus();
    }
   }
}


export default validLinkOnClick;