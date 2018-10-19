// =========================================================
// JND DATA

const JND_BASE = {

  foundational : 
    [
    {distribution_type: "gaussian", base_correlation: 0.9, error: 0.0001, max_step_size: 0.01, converge_from_above: false, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.8, error: 0.0001, max_step_size: 0.01, converge_from_above: false, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.7, error: 0.0001, max_step_size: 0.01, converge_from_above: false, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.6, error: 0.0001, max_step_size: 0.01, converge_from_above: false, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.5, error: 0.0001, max_step_size: 0.01, converge_from_above: false, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.4, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.3, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.2, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.1, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.0, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.9, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.8, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.7, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.6, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.5, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.4, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.3, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3}
    ],

  design: 
    [
    {distribution_type: "gaussian", base_correlation: 0.3, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.6, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.9, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.3, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.6, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.9, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.3, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.6, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.9, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.3, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.6, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.9, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.3, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.6, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},

    {distribution_type: "gaussian", base_correlation: 0.9, error: 0.0001, max_step_size: 0.01, converge_from_above: true, initial_difference: 0.1, num_points: 100, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', feedback_background_color: 'WHITE', background_color: 'WHITE', point_size: 3},
    ]
    
}

const JND_CONDITIONS = {

  distractor_rainbow : 
    [
    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'RED', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'RED', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'RED', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'GREEN', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'GREEN', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'GREEN', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'RED', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'RED', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'RED', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'BLUE', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'BLUE', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'BLUE', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'YELLOW', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'YELLOW', target_color: 'BLACK', dist_point_size: 3},

    {dist_base: 0.3, dist_error: 0.0001, dist_num_points: 100, dist_color: 'YELLOW', target_color: 'BLACK', dist_point_size: 3}
    ]
}

// =========================================================
// STEVENS DATA

const STEVENS_BASE = {

  foundational : 
    [
    {distribution_type: "gaussian", round_type: 'test', trials_per_round: 4, high_ref: 1, low_ref: 0, error: 0.0001, num_points: 100, regen_rate: 1000, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', background_color: 'WHITE', point_size: 3, regen_rate: 1000},

    {distribution_type: "gaussian", round_type: 'test', trials_per_round: 4, high_ref: 0.5, low_ref: 0, error: 0.0001, num_points: 100, regen_rate: 1000, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', background_color: 'WHITE', point_size: 3, regen_rate: 1000},

    {distribution_type: "gaussian", round_type: 'test', trials_per_round: 4, high_ref: 1, low_ref: 0.5, error: 0.0001, num_points: 100, regen_rate: 1000, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', background_color: 'WHITE', point_size: 3, regen_rate: 1000},

    {distribution_type: "gaussian", round_type: 'test', trials_per_round: 4, high_ref: 0.25, low_ref: 0, error: 0.0001, num_points: 100, regen_rate: 1000, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', background_color: 'WHITE', point_size: 3, regen_rate: 1000},

    {distribution_type: "gaussian", round_type: 'test', trials_per_round: 4, high_ref: 0.5, low_ref: 0.25, error: 0.0001, num_points: 100, regen_rate: 1000, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', background_color: 'WHITE', point_size: 3, regen_rate: 1000},

    {distribution_type: "gaussian", round_type: 'test', trials_per_round: 4, high_ref: 0.75, low_ref: 0.5, error: 0.0001, num_points: 100, regen_rate: 1000, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', background_color: 'WHITE', point_size: 3, regen_rate: 1000},

    {distribution_type: "gaussian", round_type: 'test', trials_per_round: 4, high_ref: 1, low_ref: 0.75, error: 0.0001, num_points: 100, regen_rate: 1000, mean: 0.5, SD: 0.2, num_SD: 2.5, point_color: 'BLACK', axis_color: 'BLACK', text_color: 'BLACK', background_color: 'WHITE', point_size: 3, regen_rate: 1000}
    ],

  design: []
}

const STEVENS_CONDITIONS = {

}

/**
 * Retrieves the data given experiment, range, and condition.
 *
 * @param  experiment  {string}            "jnd" or "stevens"   
 *         range       {string}            "foundational" or "design"         
 *         condition   {string}            Name of condition
 *
 * @return dataset     [{assoc}, {assoc}, .... ]         
 */
function get_data(experiment, range, condition, is_full_set){
  var dataset;

  if (experiment === "jnd"){

    dataset = JND_BASE[range];

    if (condition !== "base") {

      if (!JND_CONDITIONS[condition]) {
        throw new Error(condition + " not supported.");
      }

      dataset = create_condition_dataset(dataset, JND_CONDITIONS[condition]);
    }
  }
  else if (experiment === "stevens"){

    dataset = STEVENS_BASE[range];

    if (condition !== "base") {

      if (!STEVENS_CONDITIONS[condition]) {
        throw new Error(condition + " not supported.");
      }

      dataset = create_condition_dataset(dataset, STEVENS_CONDITIONS[condition]);
    }
  }
  else {
    throw new Error(experiment + " not supported.");
  }

  // Splice out only 4 subconditions if don't want full set
  if (!is_full_set){
    dataset = dataset.slice(0,4);
  }

  return dataset;
}

/**
 * Retrieves a smaller dataset (4 subconditions) given experiment, range and condition.
 *
 * @param  experiment  {string}            "jnd" or "stevens"   
 *         range       {string}            "foundational" or "design"         
 *         condition   {string}            Name of condition
 *
 * @return dataset     [{assoc}, {assoc}, .... ]         
 */
function get_data_subset(experiment, range, condition) {

  var dataset = get_data(experiment, range, condition);

  return dataset.slice(0, 4);
}

/**
 * Appends condition-specific data to the dataset.
 *
 * @param  dataset           [{assoc}, {assoc}, .... ]     dataset with base experiment constants   
 *         condition_data    [{assoc}, {assoc}, .... ]     condition set for that experiment         
 *
 * @return dataset           [{assoc}, {assoc}, .... ]  
 **/
function create_condition_dataset(dataset, condition_data){

  var condition_dataset = [];

  for (let i in dataset) {
    let obj = Object.assign({}, dataset[i], condition_data[i]);
    condition_dataset.push(obj);
  }

  return condition_dataset;
}

export {
  get_data,
  get_data_subset,
  create_condition_dataset
}