import {Movies} from "@/features/Movies";
import {MainLayout} from "@/app/layout/MainLayout.tsx";
import {MoviesProvider} from "@/app/providers/MoviesProvider.tsx";

const MainPage = () => {
    return (
        <MoviesProvider>
                <MainLayout>
                    <Movies/>
                </MainLayout>
        </MoviesProvider>

    );
};

export default MainPage;
