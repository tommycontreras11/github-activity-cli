import { GITHUB_ACTION_TYPE } from "./constant.js"

const fetchUser = async (username) => {
  fetch(`https://api.github.com/users/${username}/events`)
    .then(async (data) => {
        const response = await data.json()

        if(response.length == 0) {
            console.log("Username not found...")
            return   
        }

        // let events = []

        // for(let i = 0; i < response.length; i++) {
        //     let repository = response[i]?.repo?.id
        //     let type = response[i]?.type

        //     if(events.includes(type)) {

        //     }else {
        //       events.push({
        //         [type]: filterByTypeAndRepo(response, repository, type)
        //       })
        //     }
        // }
        
        let events = []
        let events_filtered = []

        for (const event of response) {
              events.push({
                type: event.type,
                repo: event.repo.name,
                action: event?.payload?.action ?? null
              })
          }
    
          // if (event.type === "PushEvent") {
          //   console.log(`Pushed to ${event.repo.name}`);
          // }
        
          // if (event.type === "IssuesEvent") {
          //   console.log(`Worked on issue in ${event.repo.name}`);
          // }

        for(let i = 0; i < events.length; i++) {
          let repo = events[i].repo
          let action = events[i]?.action
          let type = events[i].type

          if(events_filtered?.filter((a) => a.repo == repo && a.type == type && a?.action == action).length > 0) {
            let findIndex = events_filtered.findIndex((a) => a.repo == repo && a.type == type && a?.action == action)

            events_filtered[findIndex].count += 1
          } else {
            events_filtered.push({
                type,
                action,
                repo,
                count: 1
              })

          }
        }

        for(const event of events_filtered) {
          let count = event?.count
          let action = event?.action
          let repo = event.repo

          if(event.type == GITHUB_ACTION_TYPE.PUSH_EVENT) { 
            console.log(`Pushed ${count} ${count > 0 ? " commits" : " commit"} to ${repo}`)
          }

          if(event.type == GITHUB_ACTION_TYPE.WATCH_EVENT) { 
            console.log(`Starred ${repo}`)
          }

          if(event.type == GITHUB_ACTION_TYPE.PULL_REQUEST_EVENT) { 
            console.log(`${event.action.toUpperCase()} pull request`)
          }

          // if(event.type == GITHUB_ACTION_TYPE.PushEvent) { 
          //   console.log(`Pushed ${count} ${count > 0 ? " commits" : " commit"} to`)
          // }
        }
        console.log(events_filtered)
    })
    .catch((error) => {
      console.log("Something went wrong: ", error);
    });
};

// const filterByTypeAndRepo = (events, repo_id, type) => {
//     return events.filter((e) => e.repo.id == repo_id && e.type == type)
// }

async function main() {
  process.stdin.on("data", async (data) => {
    const input = data.toString().trim();

    const command = input.split(" ")[0];

    console.log("Input: ", input);

    switch (command) {
      case "github-activity":
        const username = input.split(" ")[1];
        await fetchUser(username)
        break;
      case "exit":
        process.exit();
        break;
      default:
        console.log("Unknown command.");
    }
  });
}

main();