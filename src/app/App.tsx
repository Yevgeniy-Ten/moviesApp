import {MainPage} from "@/pages/MainPage";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/shared/api/queryClient.ts";

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <MainPage/>
            </QueryClientProvider>
        </>
    )
}

export default App
