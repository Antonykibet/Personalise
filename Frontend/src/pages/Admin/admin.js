import ProductCreationForm from "./themedProductCreationForm"
import ThemeCreationForm from "./themeCreationForm";
import AvailableItemCreation from "./availableItemCreation";
import AddStockImageForm from "./stockImage";


export default function adminpage(){
    return(
        <>
            <AvailableItemCreation/>
            <ThemeCreationForm/>
            <ProductCreationForm/>
            <AddStockImageForm/>
        </>
    )
}