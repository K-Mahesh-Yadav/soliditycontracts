function Navbar() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a class="navbar-brand" href="#">Sathyameva Jayathe</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
                        </div>
                    </div>
                    <div>
                        <div id="user_name" style="color: aliceblue;"></div>
                    </div>
                    <div>
                        <a class="nav-item nav-link active" href="/"><button class="bg-primary"
                            style="margin: 0 30px ;">Logout</button></a>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Navbar;