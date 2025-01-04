import ProductCreationForm from "./themedProductCreationForm"
import ThemeCreationForm from "./themeCreationForm";
import AvailableItemCreation from "./availableItemCreation";


export default function adminpage(){
    return(
        <>
            <AvailableItemCreation/>
            <ThemeCreationForm/>
            <ProductCreationForm/>
        </>
    )
}