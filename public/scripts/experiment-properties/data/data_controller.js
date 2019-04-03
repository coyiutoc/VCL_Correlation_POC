import {CUSTOM_TRIAL_STRUCTURE_CONDITIONS, get_subconditions} from "/scripts/experiment-properties/data/custom_subcondition_generator.js";
import {JND_BASE, JND_CONDITIONS} from "/scripts/experiment-properties/data/constants/jnd_data.js";
import {STEVENS_BASE, STEVENS_CONDITIONS} from "/scripts/experiment-properties/data/constants/stevens_data.js";
import {JND_RADIUS_BASE, JND_RADIUS_CONDITIONS} from "/scripts/experiment-properties/data/constants/jnd_radius_data.js";
import {ESTIMATION_BASE, ESTIMATION_CONDITIONS} from "/scripts/experiment-properties/data/constants/estimation_data.js";

export { get_data,
         get_data_subset,
         create_condition_dataset,
         EXPERIMENT_BASES,
         EXPERIMENT_CONDITIONS };

const EXPERIMENT_BASES = {
  "JND" : JND_BASE,
  "Stevens" : STEVENS_BASE,
  "JND_Radius" : JND_RADIUS_BASE,
  "Estimation" : ESTIMATION_BASE
}

const EXPERIMENT_CONDITIONS = {
  "JND" : JND_CONDITIONS,
  "Stevens" : STEVENS_CONDITIONS,
  "JND_Radius" : JND_RADIUS_CONDITIONS,
  "Estimation" : ESTIMATION_CONDITIONS
}

/**
 * Retrieves the data for the corresponding experiment object.
 *
 * @param  experiment  {object}       Model object of the experiment 
 *
 * @return dataset     [{assoc}, {assoc}, .... ]         
 */
function get_data(experiment){

  var dataset;

  var trial_structure = experiment.trial_structure;
  var condition = experiment.condition_name;
  var experiment_name = experiment.constructor.name;

  // If there is a "custom" condition AKA the subconditions are 
  // generated by code rather than by constants (arrays in the constants folder)
  if (trial_structure === "custom" || CUSTOM_TRIAL_STRUCTURE_CONDITIONS[trial_structure].includes(condition)) {
    return get_subconditions(experiment);
  }

  // If not a base condition
  if (!condition.split("_").includes("base")){

    // Check that a condition exists
    if (!EXPERIMENT_CONDITIONS[experiment_name][condition] || !EXPERIMENT_BASES[experiment_name][trial_structure]){
       throw new Error (condition + " is not supported.");
    }

    // Get subconditions then append to the base 
    let subconditions = EXPERIMENT_CONDITIONS[experiment_name][condition];
    dataset = create_condition_dataset(EXPERIMENT_BASES[experiment_name][trial_structure], subconditions);

  // If a base condition
  } else {

    if (!EXPERIMENT_BASES[experiment_name][trial_structure]) {
      throw new Error ("Base for " + condition + " does not exist.");
    }

    dataset = EXPERIMENT_BASES[experiment_name][trial_structure];
  } 

  return dataset;
}

/**
 * Retrieves a smaller dataset (4 subconditions) given experiment, trial structure and condition.
 *
 * @param  experiment      {string}            "jnd" or "stevens"   
 *         trial_structure {string}            "foundational" or "design"         
 *         condition       {string}            Name of condition
 *
 * @return dataset     [{assoc}, {assoc}, .... ]         
 */
function get_data_subset(experiment, trial_structure, condition) {

  var dataset = get_data(experiment, trial_structure, condition);

  return dataset.slice(0, 4);
}

/**
 * Appends condition-specific data to the dataset.
 *
 * @param  base_data         [{assoc}, {assoc}, .... ]     dataset with base experiment constants   
 * @param  condition_data    [{assoc}, {assoc}, .... ]     condition set for that experiment
 *
 * @return dataset           [{assoc}, {assoc}, .... ]  
 **/
function create_condition_dataset(base_data, condition_data){

  var condition_dataset = [];

  if (base_data.length != condition_data.length) {
    throw Error("Base dataset length is not equal to condition dataset length.");
  }

  for (let i in base_data) {
    let obj = Object.assign({}, base_data[i], condition_data[i]);
    condition_dataset.push(obj);
  }

  return condition_dataset;
}
