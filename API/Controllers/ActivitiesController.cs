using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            var activity = await Mediator.Send(new Details.Query{Id = id}); 

            if(activity == null){
                return NotFound(new {
                    Message = "Nothing was found"
                });
            }

            return activity;
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity){
            await Mediator.Send(new Create.Command {Activity = activity});
            return Ok(new{
                Message = "New activity created"
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity){
            activity.ID = id;
            return Accepted(await Mediator.Send(new Edit.Command {Activity = activity}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id){
            await Mediator.Send(new Delete.Command {Id = id});
            return NoContent();
        }
    }
}