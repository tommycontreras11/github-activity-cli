export const GITHUB_ACTION_TYPE = {
    "WATCH_EVENT": "WatchEvent",
    "ISSUE_COMMENT_EVENT": "IssueCommentEvent",
    "PULL_REQUEST_REVIEW_EVENT": "PullRequestReviewEvent",
    "PULL_REQUEST_REVIEW_COMMENT_EVENT": "PullRequestReviewCommentEvent",
    "DELETE_EVENT": "DeleteEvent",
    "PUSH_EVENT": "PushEvent",
    "PULL_REQUEST_EVENT": "PullRequestEvent",
    "ISSUES_EVENT": "IssuesEvent"
}

// export const GITHUB_EVENTS = Object.freeze({
//   PUSH: {
//     TYPE: "PushEvent"
//   },

//   PULL_REQUEST: {
//     TYPE: "PullRequestEvent",
//     ACTIONS: Object.freeze([
//       "opened",
//       "closed",
//       "reopened"
//     ])
//   },

//   ISSUES: {
//     TYPE: "IssuesEvent",
//     ACTIONS: Object.freeze([
//       "opened",
//       "closed",
//       "reopened"
//     ])
//   },

//   ISSUE_COMMENT: {
//     TYPE: "IssueCommentEvent",
//     ACTIONS: Object.freeze([
//       "created"
//     ])
//   },

//   WATCH: {
//     TYPE: "WatchEvent"
//   },

//   FORK: {
//     TYPE: "ForkEvent"
//   }
// });