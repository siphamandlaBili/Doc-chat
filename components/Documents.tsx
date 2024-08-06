import { ClerkLoaded } from "@clerk/nextjs"
import Header from "./Header"
import PlaceholderSocument from "./PlaceholderSocument"

function Documents() {
    return (
        <ClerkLoaded>
            <div className=" flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto">
                {/* map throu the documents */}

                <PlaceholderSocument/>
            </div>
        </ClerkLoaded>
    )
}

export default Documents
