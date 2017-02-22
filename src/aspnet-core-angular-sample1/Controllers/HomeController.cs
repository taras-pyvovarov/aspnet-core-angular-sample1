using Microsoft.AspNetCore.Mvc;

namespace aspnet_core_angular_sample1.Controllers
{
    [Route("")]
    [Route("Home")]
    public class HomeController : Controller
    {
        [Route("")]
        [Route(nameof(Index))]
        public IActionResult Index()
        {
            return View();
        }
    }
}