// The Story: We want an app that once it measures a kid's height, can display whether the child is tall enough to ride the rollercoaster. We're tasked with building the function that will display the right message to the child.

// Step 1: Create the following variable:

// a variable called childHeight that is a number. Give it any whole, positive number you like. 
// Step 2: Create a function called displayIfChildIsAbleToRideTheRollerCoaster.

// Step 3: Inside the function, create the following conditional:

// If the childHeight is greater than 52, the console.log should say "Get on that ride, kiddo!". Else, console.log should say "Sorry kiddo. Maybe next year."





function ifChildIsAbleToRideRollerCoaster(height){
    childHeight = height
    if (childHeight >= 52){
        console.log("Get on that ride, kiddo!")
    }
    else {
        console.log("Sorry kiddo. Maybe next year.")
    }
}

ifChildIsAbleToRideRollerCoaster(52)
ifChildIsAbleToRideRollerCoaster(60)
ifChildIsAbleToRideRollerCoaster(51)
