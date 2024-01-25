## Task Completed
- ✅ Dark/Light Theme
- ✅ Responsive Design
- ✅ Scalable Components
- ✅ Animation while inital page loads & while hover on icon
## Tech Stack Used
- ✅ ReactJS
- ✅ Tailwind CSS
- ✅ Animation.css
- ✅ XArrows

## Assumptions
- I have added the addStep fun and removeStep(specific Id)
- but the connected Arrow between two steps connected by some specific Id so if the use key over here it would not update the Id. so it does not able to correctly find the starting and ending Point
- Best way is to assign two button of addStep or removeStep so that re-render occurs correctly
- Key with Id is must be needed to map so that in the next Render React would able to update the DOM efficiently and for performance enhancement.
- Passed the startingPoint for somehow optimizr it.
## Instruction to Run the Project
```
cd client
npm install
npm run dev
```
