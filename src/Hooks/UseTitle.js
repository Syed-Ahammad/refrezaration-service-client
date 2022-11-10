import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title = `AC-Repair ${title}`
    },[title])
}

export default useTitle;