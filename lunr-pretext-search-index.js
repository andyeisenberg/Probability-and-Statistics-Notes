var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-Set-Theory",
  "level": "1",
  "url": "sec-Set-Theory.html",
  "type": "Section",
  "number": "1.1",
  "title": "Set Theory",
  "body": " Set Theory    The sample space , often denoted , is the set of all possible results of an experiment. A single result is called an outcome , while a collection of results is called an event .      An experiment consists of rolling a standard 6-sided die. The sample space is . One possible event is , i.e., the event that the result of the roll is even.  What would the sample space look like if we roll the die two times and recorded the results?           Let be a set. The symbol means \"is an element of\", as in . Given another set , we say is a subset of , written , to mean that every element of the set is also an element of the set .      Consider sets and , each contained inside . We can combine sets in a variety of ways:   Union  The union of and is the set .    Intersection  The intersection of and is the set .    Difference  The set difference  is the set .    Complement  The complement of is the set .    Empty Set  The empty set , usually written or , is the set which contains no elements.       It's useful sometimes to draw pictures representing sets...     Two sets and are disjoint if .      Given a finite set , the cardinality of , written , is the number of elements in .       Consider the sets , , and , which are all subsets of .     Find .           Find , , , , , , , and . Is it true that the size of the union of sets is equal to the sum of the sizes of the individual sets?     , , , , , , , . In particular, note that , so it is not true in general that the size of the union of sets is the sum of the sizes of the individual sets.      Find and .     , .       Suppose we roll a 6-sided die two times. List the set of all possible results. [Note: the result (2, 4)---rolling a 2 and then a 4---is different from the result ---rolling a 4 and then a 2.]      Suppose we flip a coin two times. List the set of all possible results. What about flipping three times? Four times? If we flip the coin 10 times, how many possible results will there be?      If we roll a 6-sided die ten times, how many possible results will there be?     "
},
{
  "id": "def-sample-space",
  "level": "2",
  "url": "sec-Set-Theory.html#def-sample-space",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  The sample space , often denoted , is the set of all possible results of an experiment. A single result is called an outcome , while a collection of results is called an event .   "
},
{
  "id": "sec-Set-Theory-3",
  "level": "2",
  "url": "sec-Set-Theory.html#sec-Set-Theory-3",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  An experiment consists of rolling a standard 6-sided die. The sample space is . One possible event is , i.e., the event that the result of the roll is even.  What would the sample space look like if we roll the die two times and recorded the results?        "
},
{
  "id": "def-subset",
  "level": "2",
  "url": "sec-Set-Theory.html#def-subset",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  Let be a set. The symbol means \"is an element of\", as in . Given another set , we say is a subset of , written , to mean that every element of the set is also an element of the set .   "
},
{
  "id": "def-set-operations",
  "level": "2",
  "url": "sec-Set-Theory.html#def-set-operations",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  Consider sets and , each contained inside . We can combine sets in a variety of ways:   Union  The union of and is the set .    Intersection  The intersection of and is the set .    Difference  The set difference  is the set .    Complement  The complement of is the set .    Empty Set  The empty set , usually written or , is the set which contains no elements.      "
},
{
  "id": "def-disjoint",
  "level": "2",
  "url": "sec-Set-Theory.html#def-disjoint",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "  Two sets and are disjoint if .   "
},
{
  "id": "def-cardinality",
  "level": "2",
  "url": "sec-Set-Theory.html#def-cardinality",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  Given a finite set , the cardinality of , written , is the number of elements in .   "
},
{
  "id": "exercises-Set-Theory-1",
  "level": "2",
  "url": "sec-Set-Theory.html#exercises-Set-Theory-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Consider the sets , , and , which are all subsets of .     Find .           Find , , , , , , , and . Is it true that the size of the union of sets is equal to the sum of the sizes of the individual sets?     , , , , , , , . In particular, note that , so it is not true in general that the size of the union of sets is the sum of the sizes of the individual sets.      Find and .     , .    "
},
{
  "id": "exercises-Set-Theory-2",
  "level": "2",
  "url": "sec-Set-Theory.html#exercises-Set-Theory-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Suppose we roll a 6-sided die two times. List the set of all possible results. [Note: the result (2, 4)---rolling a 2 and then a 4---is different from the result ---rolling a 4 and then a 2.]   "
},
{
  "id": "exercises-Set-Theory-3",
  "level": "2",
  "url": "sec-Set-Theory.html#exercises-Set-Theory-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Suppose we flip a coin two times. List the set of all possible results. What about flipping three times? Four times? If we flip the coin 10 times, how many possible results will there be?   "
},
{
  "id": "exercises-Set-Theory-4",
  "level": "2",
  "url": "sec-Set-Theory.html#exercises-Set-Theory-4",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "  If we roll a 6-sided die ten times, how many possible results will there be?   "
},
{
  "id": "sec-Probability",
  "level": "1",
  "url": "sec-Probability.html",
  "type": "Section",
  "number": "1.2",
  "title": "Definition of Probability",
  "body": " Definition of Probability    A probability distribution on a sample space assigns probabilities to every event, satisfying the following conditions:    .     for any event .    If , then .       For small probability spaces (i.e., with finitely many outcomes in the sample space), we'll usually assign probabilities to each individual outcome, and perhaps list them in a table. Then, to find the probability of any event, simply add together the probabilities of each outcome in that event.    An experiment consists of rolling a standard 6-sided die. The sample space is . The probability distribution (assuming a fair die) is shown below.   Distribution for a fair die        1     2     3     4     5     6      One possible event is , i.e., the event that the result of the roll is even. The probability of is:       Let be a sample space and an event. We refer to the distribution in which for all as the uniform distribution . In this case, it follows that .      A person picks a random number from 1 to 10. What is the probability that they picked 3?        Consider the sample space with probability distribution below. Calculate the probabilities of , , , and .          1  0.1    2  0.05    3  0.2    4  0.15    5  0.15    6  0.1    7  0.05    8  0.1    9  0.1          Suppose we flip a coin two times. Answer the questions below. What about three flips? What about four flips?     Write all outcomes in the sample space .      Make a probability distribution table for assuming the coin is fair.      Make a probability distribution table assuming the coin comes up heads with probability 0.3.       Suppose we roll a die two times. Answer the questions below.     Write all outcomes in the sample space .      Make a probability distribution table for assuming the die is fair.      Let be the event that the second roll is higher than the first, and let be the event that the first roll is even. Find , and .       Suppose a die has the values on the faces, but the die is not fair. Instead, the probabilities scale by the same amount as the face values. For example, a result of 4 is twice as likely as a result of 2, since 4 is twice as large as 2; a result of 6 is six times more likely than a result of 1; and so on. Write a probability distribution table for this die.      Suppose a die has the values on the faces, but the die is not fair. Instead, each even value has an equal probability, each odd value has an equal probability, and the even values are each twice as likely as the odd values to appear on a roll. Write a probability distribution table for this die.      A toxin molecule inside a cell has a 0.3 probability of leaving the cell during a 1-minute period. For each value of , find the probability of the toxin molecule leaving the cell during the th minute. What is the probability of the molecule leaving the cell during the first 3 minutes?      Each of 10 toxin molecules inside a cell has a 0.3 probability of leaving the cell during a 1-minute period. For each value of , and for each value of , find the probability that exactly toxin molecules remain in the cell after the th minute.     "
},
{
  "id": "def-probability-distribution",
  "level": "2",
  "url": "sec-Probability.html#def-probability-distribution",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  A probability distribution on a sample space assigns probabilities to every event, satisfying the following conditions:    .     for any event .    If , then .      "
},
{
  "id": "sec-Probability-4",
  "level": "2",
  "url": "sec-Probability.html#sec-Probability-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  An experiment consists of rolling a standard 6-sided die. The sample space is . The probability distribution (assuming a fair die) is shown below.   Distribution for a fair die        1     2     3     4     5     6      One possible event is , i.e., the event that the result of the roll is even. The probability of is:    "
},
{
  "id": "def-discrete-uniform-distribution",
  "level": "2",
  "url": "sec-Probability.html#def-discrete-uniform-distribution",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Let be a sample space and an event. We refer to the distribution in which for all as the uniform distribution . In this case, it follows that .   "
},
{
  "id": "sec-Probability-6",
  "level": "2",
  "url": "sec-Probability.html#sec-Probability-6",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "  A person picks a random number from 1 to 10. What is the probability that they picked 3?    "
},
{
  "id": "exercises-Probability-1",
  "level": "2",
  "url": "sec-Probability.html#exercises-Probability-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  Consider the sample space with probability distribution below. Calculate the probabilities of , , , and .          1  0.1    2  0.05    3  0.2    4  0.15    5  0.15    6  0.1    7  0.05    8  0.1    9  0.1       "
},
{
  "id": "exercises-Probability-2",
  "level": "2",
  "url": "sec-Probability.html#exercises-Probability-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Suppose we flip a coin two times. Answer the questions below. What about three flips? What about four flips?     Write all outcomes in the sample space .      Make a probability distribution table for assuming the coin is fair.      Make a probability distribution table assuming the coin comes up heads with probability 0.3.    "
},
{
  "id": "exercises-Probability-3",
  "level": "2",
  "url": "sec-Probability.html#exercises-Probability-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  Suppose we roll a die two times. Answer the questions below.     Write all outcomes in the sample space .      Make a probability distribution table for assuming the die is fair.      Let be the event that the second roll is higher than the first, and let be the event that the first roll is even. Find , and .    "
},
{
  "id": "exercises-Probability-4",
  "level": "2",
  "url": "sec-Probability.html#exercises-Probability-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  Suppose a die has the values on the faces, but the die is not fair. Instead, the probabilities scale by the same amount as the face values. For example, a result of 4 is twice as likely as a result of 2, since 4 is twice as large as 2; a result of 6 is six times more likely than a result of 1; and so on. Write a probability distribution table for this die.   "
},
{
  "id": "exercises-Probability-5",
  "level": "2",
  "url": "sec-Probability.html#exercises-Probability-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "  Suppose a die has the values on the faces, but the die is not fair. Instead, each even value has an equal probability, each odd value has an equal probability, and the even values are each twice as likely as the odd values to appear on a roll. Write a probability distribution table for this die.   "
},
{
  "id": "exercises-Probability-6",
  "level": "2",
  "url": "sec-Probability.html#exercises-Probability-6",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": "  A toxin molecule inside a cell has a 0.3 probability of leaving the cell during a 1-minute period. For each value of , find the probability of the toxin molecule leaving the cell during the th minute. What is the probability of the molecule leaving the cell during the first 3 minutes?   "
},
{
  "id": "exercises-Probability-7",
  "level": "2",
  "url": "sec-Probability.html#exercises-Probability-7",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": "  Each of 10 toxin molecules inside a cell has a 0.3 probability of leaving the cell during a 1-minute period. For each value of , and for each value of , find the probability that exactly toxin molecules remain in the cell after the th minute.   "
},
{
  "id": "sec-Conditional-Probability",
  "level": "1",
  "url": "sec-Conditional-Probability.html",
  "type": "Section",
  "number": "1.3",
  "title": "Conditional Probability",
  "body": " Conditional Probability   Conditional Probability    Let and be events. The conditional probability of given is       An experiment consists of rolling a fair 6-sided die two times. Let be the event that the sum of the rolls is at least 10. To find , we note that , which has 6 elements. Since , we have .  Let be the event that the first roll is 6. If we pause after the first die roll seeing the value of 6, we might be more inclined to expect a sum of at least 10. The evidence that we've already seen changes our understanding of the situation. Since , . Also, , so . Finally:       Diagnostic Testing  Diagnostic tests for diseases aren't perfect. When a test comes back positive or negative, a patient will want to understand the (conditional) probability that they have or don't have the disease based on the evidence (the diagnostic test result).    The sensitivity of a diagnostic test is the probability that a patient who has the disease will see a positive test result. The specificity is the probability that a patient who does not have the disease will see a negative test result.    Introducing event notation, let be the event that a patient has the disease, and let be the event that they receive a positive test result. Then the sensitivity of the diagnostic test is , and the specificity is . However, when the patient takes a diagnostic test, the conditional probabilities they would be most interested in would be and .  Bayes' Theorem expresses the relationship between a conditional probability and the flipped conditional probability .   Bayes' Theorem (v1)        For example, if a patient sees a positive diagnostic test result, they might try to calculate: It will take some work to be able to use this formula. We likely don't have direct access to or .  Let's consider , the probability of receiving a positive test result. The sensitivity tells us this probability under the condition that the patient has the disease. For a patient who doesn't have the disease, the specificity isn't quite the number we're looking for. However, consider the complementary probability: The total can be divided into two categories: patients who have the disease and test positive, and patients who don't have the disease and test positive. So: We can take this breakdown of and write a new version of Bayes' Theorem:   Bayes' Theorem (v2)        We're still missing a crucial piece of information: , the probability (not conditioned on any evidence) that the patient has the disease. This is often referred to as the prior , as in, our prior understanding of the probability of something before we gained some new information from evidence. The conditional probability calculated using Bayes' Theorem is usually called the posterior (i.e., after taking evidence into account). There isn't always one single number that's reasonable to use as the prior probability. For example, in a diagnostic testing situation, the prevalence of the disease i.e., the proportion of the population who have the disease might feel like a natural number to use as the prior. However, what prevalence should you use? During the COVID-19 pandemic, the prevalence of COVID in a particular country, state, and city might be different. There's also the possibility of applying Bayes' Theorem multiple times to take into account multiple pieces of evidence, using the posterior probability from one application of Bayes' Theorem to play the role of the prior probability in the next. This idea would apply if, for example, a patient took a second diagnostic test to double-check.    A 50-year old woman with no symptoms is screened for breast cancer and tests positive. If the prevalence of breast cancer for women in her age group is 1% and the particular screening process used has a sensitivity of 90% and a specificity of 91%, what is the probability that the woman has breast cancer given her positive result?    Let be the event of testing positive and the event of having the disease. Then the prevalence is given as 1%, or 0.01. The sensitivity is , and the specificity is . So, according to Bayes' Theorem:         In each of the following scenarios with given events and , alculate , , , and .     An experiment consists of rolling a fair die two times. Let be the event that the sum is even, and let be the event that the second roll is higher than the first.      An experiment consists of flipping a fair coin three times. Let be the event that the first and second flips match. Let be the event that there are at least two heads.       A diagnostic test is developed to detect a disease present in 3.2% of the population. For a patient who has the disease, the test will accurately give a positive result 65% of the time. When the patient does not have the disease, the test will accurately give a negative result 99.9% of the time.     For a patient who receives a positive test, what is the probability they have the disease?    TODO      For a patient who receives a negative test, what is the probability they do not have the disease?    TODO      "
},
{
  "id": "def-conditional-probability",
  "level": "2",
  "url": "sec-Conditional-Probability.html#def-conditional-probability",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Let and be events. The conditional probability of given is    "
},
{
  "id": "example-rolls-conditional",
  "level": "2",
  "url": "sec-Conditional-Probability.html#example-rolls-conditional",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  An experiment consists of rolling a fair 6-sided die two times. Let be the event that the sum of the rolls is at least 10. To find , we note that , which has 6 elements. Since , we have .  Let be the event that the first roll is 6. If we pause after the first die roll seeing the value of 6, we might be more inclined to expect a sum of at least 10. The evidence that we've already seen changes our understanding of the situation. Since , . Also, , so . Finally:    "
},
{
  "id": "def-sensitivity-specificity",
  "level": "2",
  "url": "sec-Conditional-Probability.html#def-sensitivity-specificity",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  The sensitivity of a diagnostic test is the probability that a patient who has the disease will see a positive test result. The specificity is the probability that a patient who does not have the disease will see a negative test result.   "
},
{
  "id": "thm-Bayes-v1",
  "level": "2",
  "url": "sec-Conditional-Probability.html#thm-Bayes-v1",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Bayes’ Theorem (v1).",
  "body": " Bayes' Theorem (v1)       "
},
{
  "id": "thm-Bayes-v2",
  "level": "2",
  "url": "sec-Conditional-Probability.html#thm-Bayes-v2",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "Bayes’ Theorem (v2).",
  "body": " Bayes' Theorem (v2)       "
},
{
  "id": "subsec-diagnostic-testing-10",
  "level": "2",
  "url": "sec-Conditional-Probability.html#subsec-diagnostic-testing-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prior posterior prevalence "
},
{
  "id": "subsec-diagnostic-testing-11",
  "level": "2",
  "url": "sec-Conditional-Probability.html#subsec-diagnostic-testing-11",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  A 50-year old woman with no symptoms is screened for breast cancer and tests positive. If the prevalence of breast cancer for women in her age group is 1% and the particular screening process used has a sensitivity of 90% and a specificity of 91%, what is the probability that the woman has breast cancer given her positive result?    Let be the event of testing positive and the event of having the disease. Then the prevalence is given as 1%, or 0.01. The sensitivity is , and the specificity is . So, according to Bayes' Theorem:    "
},
{
  "id": "exercises-Conditional-Probability-1-2",
  "level": "2",
  "url": "sec-Conditional-Probability.html#exercises-Conditional-Probability-1-2",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": "  An experiment consists of rolling a fair die two times. Let be the event that the sum is even, and let be the event that the second roll is higher than the first.   "
},
{
  "id": "exercises-Conditional-Probability-1-3",
  "level": "2",
  "url": "sec-Conditional-Probability.html#exercises-Conditional-Probability-1-3",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": "  An experiment consists of flipping a fair coin three times. Let be the event that the first and second flips match. Let be the event that there are at least two heads.   "
},
{
  "id": "exercises-Conditional-Probability-2",
  "level": "2",
  "url": "sec-Conditional-Probability.html#exercises-Conditional-Probability-2",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": "  A diagnostic test is developed to detect a disease present in 3.2% of the population. For a patient who has the disease, the test will accurately give a positive result 65% of the time. When the patient does not have the disease, the test will accurately give a negative result 99.9% of the time.     For a patient who receives a positive test, what is the probability they have the disease?    TODO      For a patient who receives a negative test, what is the probability they do not have the disease?    TODO    "
},
{
  "id": "sec-Independent-Events",
  "level": "1",
  "url": "sec-Independent-Events.html",
  "type": "Section",
  "number": "1.4",
  "title": "Independent Events",
  "body": " Independent Events  The idea of conditional probability is that knowledge of one event can change our understanding of the probability of another. But it's also important to understand when this is not the case.    Events are independent if .    The equation very concretely says: knowledge that the event has occurred does not change our understanding of . Assuming , this is equivalent to , since: This latter form of the equation is often more useful in calculations.    In , we considered an experiment in which we rolled a fair 6-sided die twice. We defined events that the sum of the rolls is at least 10 and that the first roll is a 6, and we found that , so and are not independent.  Now consider the event that the sum of the rolls is 7, which sounds very similar to the event . We have: So, even though the descriptions of events and are very similar, the event is independent with , while is not.       An experiment consists of rolling a fair die two times. Let be the event that the sum is even, and let be the event that the second roll is higher than the first. Are and independent?      An experiment consists of flipping a fair coin three times. Let be the event that the first and second flips match. Let be the event that there are at least two heads. Are and independent?      Let and be events in the sample space . Create a probability distribution for so that are independent.     "
},
{
  "id": "def-independent-events",
  "level": "2",
  "url": "sec-Independent-Events.html#def-independent-events",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  Events are independent if .   "
},
{
  "id": "example-rolls-independent",
  "level": "2",
  "url": "sec-Independent-Events.html#example-rolls-independent",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  In , we considered an experiment in which we rolled a fair 6-sided die twice. We defined events that the sum of the rolls is at least 10 and that the first roll is a 6, and we found that , so and are not independent.  Now consider the event that the sum of the rolls is 7, which sounds very similar to the event . We have: So, even though the descriptions of events and are very similar, the event is independent with , while is not.   "
},
{
  "id": "exercises-Independent-Events-1",
  "level": "2",
  "url": "sec-Independent-Events.html#exercises-Independent-Events-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  An experiment consists of rolling a fair die two times. Let be the event that the sum is even, and let be the event that the second roll is higher than the first. Are and independent?   "
},
{
  "id": "exercises-Independent-Events-2",
  "level": "2",
  "url": "sec-Independent-Events.html#exercises-Independent-Events-2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  An experiment consists of flipping a fair coin three times. Let be the event that the first and second flips match. Let be the event that there are at least two heads. Are and independent?   "
},
{
  "id": "exercises-Independent-Events-3",
  "level": "2",
  "url": "sec-Independent-Events.html#exercises-Independent-Events-3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Let and be events in the sample space . Create a probability distribution for so that are independent.   "
},
{
  "id": "sec-Discrete-RVs",
  "level": "1",
  "url": "sec-Discrete-RVs.html",
  "type": "Section",
  "number": "2.1",
  "title": "Discrete Random Variables",
  "body": " Discrete Random Variables   Discrete Random Variables    Let be a sample space. A random variable is a function which assigns a number to each outcome.      Suppose an experiment consists of flipping a fair coin 4 times. Let be the number of heads. The actual outcomes in the experiment are heads\/tails sequences of length 4, such as and . The random variable assigns a numerical measurement to the outcomes, such as and .  For any real number value , we can consider the event consisting of outcomes such that . For example, the flip sequences , and all have 3 heads, so .     Indicator Random Variable   Let be an event in the sample space . An indicator random variable for is the random variable such that     Indicator random variables are also called Bernoulli random variables , although we'll prefer the former term since it more clearly states the purpose of these random variables: to indicate whether or not a particular event has occurred. We'll use the language \" indicates \" to mean that is an indicator random variable for the event . In this case, , and .    Consider the set of all real numbers which are actually output by a random variable . If does not contain any interval of values, then the random variable is called discrete . Otherwise, it's called continuous .      Any random variable defined on a finite sample space is discrete the set of outputs of cannot contain an interval if it only has finitely many values.  Suppose an experiment consists of growing a plant in a new fertilizer, and a random variable measures the height of the plant after a set growing period. Now could conceivably take on an interval's worth of values (such as, e.g., any real number between 10 inches and 20 inches), so this random variable would be continuous.  The distinction between discrete and continuous random variables is not simply the distinction of whether the sample space is finite or infinite. Consider the experiment in which we flip a coin repeatedly until we first see a coin come up heads. Let be the number of times the coin is flipped. Then there are infinitely many possible values of (1, 2, 3, and so on), but there's no interval of real numbers which are all possible outputs of . The possible outputs of are discrete (in the non-technical, English sense of the word: separated).    There are several particular types of distributions that appear repeatedly, since they model common behaviors. Indicator random variables, for example, will appear any time a random process generates a yes\/no or success\/failure type of answer to a question. Below are some other common distributions.    The Binomial Distribution    Suppose an event occurs with probability . If we perform independent trials, let be the random variable which counts the number of trials in which the event occurred. Then has the binomial distribution with parameters and . We'll write to denote this. For each value , we'll write for . (If we want to keep track of the parameter values, we may write .)      Suppose we have a coin which comes up heads with probability . If we flip the coin three times and let be the number of heads, then is binomially distributed with parameters and . Then has the distribution below.          0  0.216    1  0.432    2  0.288    3  0.064       To understand how these probabilities are calculated, consider a particular heads\/tails sequence, such as . If the probability of heads is 0.4, then the probability of tails is 0.6. Since the results of different coin flips are independent from each other, the probability of seeing precisely the sequence would be the product . The probability of seeing precisely would be , the same product of terms in a different order. So, if we knew exactly the number of flip sequences of length 3 with exactly 2 heads, we could calculate the probability of seeing 2 heads as: The probability for each sequence is straightforward to generalize: if there are flips and of them are heads, then of them are tails. So the product we should calculate will have copies of the parameter and copies of the complementary probability :     We'll write the symbol to mean the number of ways to choose things out of things. The number is read \" choose \" and called a binomial coefficient .    The term \"binomial coefficient\" is used here because these numbers form coefficients of a polynomial in an important theorem about binomials called the Binomial Theorem . The binomial coefficients will precisely tell us the number of flip sequences of length with precisely heads (to build such a sequence, we must choose out of flips in the sequence to be heads; the rest must be tails). So, now we need a way to find the numbers .    Let be a positive integer. Then the factorial of , written , is the product of the positive integers up to , i.e.:      Binomial Coefficient Formula   For any ,     We won't provide a justification of this formula here, but we'll put it to use to calculate probabilities in the binomial distribution. For example, the number of flip sequences of length 3 with exactly 2 heads is: Since we previously said the probability of such a sequence is 0.096, we can now find the probability of seeing exactly 2 heads in 3 flips of the coin: which matches the value in . More generally:   Binomial Probability Formula          Geometric Distribution    Suppose an event occurs with probability . If we perform independent trials repeatedly, let be the random variable which counts the number of trials performed until we see the event occur for the first time. ( counts the final trial in which the event occurs.) Then has the geometric distribution with parameter . We'll write to denote this. For each value , we'll write for . (If we want to keep track of the parameter value, we may write .)    Suppose we flip a coin repeatedly until we first see heads. The number of flips is geometrically distributed with parameter , which gives the probability of a flip coming up heads. Then the probability of tails is . For any particular , in order to have , we must see exactly the flip sequence , where the number of tails is exactly . The probability of seeing this particular sequence is then:   Geometric Probability Formula          Poisson Distribution    A Poisson process is one in which some event occurs randomly at a constant probabilistic rate over time. Suppose we observe a Poisson process for a fixed amount of time , and let count the number of occurrences of the event. Then has the Poisson distribution with parameters and . We'll write to denote this. For each value , we'll write for . (If we want to keep track of the parameter values, we may write . See for an important detail about units.)     Poisson Probability Formula        The term is potentially misleading here depending on the units given for each value. The idea is that the rate information might be given for a different period of time than the observation period, so the rate should be scaled before calculating a probability. But the rate and observation time must be using the same time unit before multiplying. See the following example.    Suppose we observe traffic along a particular stretch of highway which typically has 200 cars pass per hour. Let be the number of cars seen in a 2-hour observation period. Since the parameter cars per hour is given for a 1-hour period, we should scale it to find the rate for a 2-hour period: cars per 2-hours. Then, for example:   Now consider the random variable counting the number of cars seen in a 30-minute observation period. We should not calculate , since measures time in hours and measures time in minutes. We should first convert hours, then we can find our appropriately scaled rate information: cars per half-hour. Then, for example: Note that when we write the notation , we assume that and are expressed with the same time units already.        We flip a coin with unknown bias 100 times and observe 43 heads. What is the maximum likelihood estimation for the probability of the coin coming up heads?      An experiment consists of flipping a biased coin 20 times. If the coin comes up heads with probability , find the probability of seeing 5 heads. Find the probability of seeing up to (and including) 3 heads.      An experiment consists of flipping a coin repeatedly until we first see heads.      If the coin comes up heads with probability 0.4, what is the probability we’ll see our first heads within three flips? What about precisely on the third flip?      Suppose the coin has an unknown probability of coming up heads. We perform the experiment in five independent trials, during which it takes 4, 5, 4, 3, and 6 flips to see our first heads in each trial. What is the maximum likelihood estimation for the probability of the coin coming up heads on a flip?      A particular store has an average of 20 customers each hour. During a 4-hour afternoon shift, what is the probability of serving 80 customers.      A particular store owner wants to approximate the average hourly rate at which customers come into the store. They observe 80 customers enter during a particular 4-hour shift. What is the maximum likelihood estimation for the hourly customer rate?     "
},
{
  "id": "def-RV",
  "level": "2",
  "url": "sec-Discrete-RVs.html#def-RV",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  Let be a sample space. A random variable is a function which assigns a number to each outcome.   "
},
{
  "id": "subsec-Discrete-RVs-3",
  "level": "2",
  "url": "sec-Discrete-RVs.html#subsec-Discrete-RVs-3",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose an experiment consists of flipping a fair coin 4 times. Let be the number of heads. The actual outcomes in the experiment are heads\/tails sequences of length 4, such as and . The random variable assigns a numerical measurement to the outcomes, such as and .  For any real number value , we can consider the event consisting of outcomes such that . For example, the flip sequences , and all have 3 heads, so .   "
},
{
  "id": "example-indicator-distribution",
  "level": "2",
  "url": "sec-Discrete-RVs.html#example-indicator-distribution",
  "type": "Example",
  "number": "2.1.3",
  "title": "Indicator Random Variable.",
  "body": " Indicator Random Variable   Let be an event in the sample space . An indicator random variable for is the random variable such that    "
},
{
  "id": "subsec-Discrete-RVs-5",
  "level": "2",
  "url": "sec-Discrete-RVs.html#subsec-Discrete-RVs-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bernoulli random variables "
},
{
  "id": "def-discrete-and-continuous",
  "level": "2",
  "url": "sec-Discrete-RVs.html#def-discrete-and-continuous",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": "  Consider the set of all real numbers which are actually output by a random variable . If does not contain any interval of values, then the random variable is called discrete . Otherwise, it's called continuous .   "
},
{
  "id": "subsec-Discrete-RVs-7",
  "level": "2",
  "url": "sec-Discrete-RVs.html#subsec-Discrete-RVs-7",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  Any random variable defined on a finite sample space is discrete the set of outputs of cannot contain an interval if it only has finitely many values.  Suppose an experiment consists of growing a plant in a new fertilizer, and a random variable measures the height of the plant after a set growing period. Now could conceivably take on an interval's worth of values (such as, e.g., any real number between 10 inches and 20 inches), so this random variable would be continuous.  The distinction between discrete and continuous random variables is not simply the distinction of whether the sample space is finite or infinite. Consider the experiment in which we flip a coin repeatedly until we first see a coin come up heads. Let be the number of times the coin is flipped. Then there are infinitely many possible values of (1, 2, 3, and so on), but there's no interval of real numbers which are all possible outputs of . The possible outputs of are discrete (in the non-technical, English sense of the word: separated).   "
},
{
  "id": "def-binomial-distribution",
  "level": "2",
  "url": "sec-Discrete-RVs.html#def-binomial-distribution",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": "  Suppose an event occurs with probability . If we perform independent trials, let be the random variable which counts the number of trials in which the event occurred. Then has the binomial distribution with parameters and . We'll write to denote this. For each value , we'll write for . (If we want to keep track of the parameter values, we may write .)   "
},
{
  "id": "subsec-binomial-distribution-3",
  "level": "2",
  "url": "sec-Discrete-RVs.html#subsec-binomial-distribution-3",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  Suppose we have a coin which comes up heads with probability . If we flip the coin three times and let be the number of heads, then is binomially distributed with parameters and . Then has the distribution below.          0  0.216    1  0.432    2  0.288    3  0.064      "
},
{
  "id": "def-binomial-coefficient",
  "level": "2",
  "url": "sec-Discrete-RVs.html#def-binomial-coefficient",
  "type": "Definition",
  "number": "2.1.9",
  "title": "",
  "body": "  We'll write the symbol to mean the number of ways to choose things out of things. The number is read \" choose \" and called a binomial coefficient .   "
},
{
  "id": "def-factorial",
  "level": "2",
  "url": "sec-Discrete-RVs.html#def-factorial",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": "  Let be a positive integer. Then the factorial of , written , is the product of the positive integers up to , i.e.:    "
},
{
  "id": "fact-binomial-coefficient-formula",
  "level": "2",
  "url": "sec-Discrete-RVs.html#fact-binomial-coefficient-formula",
  "type": "Fact",
  "number": "2.1.11",
  "title": "Binomial Coefficient Formula.",
  "body": " Binomial Coefficient Formula   For any ,    "
},
{
  "id": "fact-binomial-probability-formula",
  "level": "2",
  "url": "sec-Discrete-RVs.html#fact-binomial-probability-formula",
  "type": "Fact",
  "number": "2.1.12",
  "title": "Binomial Probability Formula.",
  "body": " Binomial Probability Formula       "
},
{
  "id": "def-geometric-distribution",
  "level": "2",
  "url": "sec-Discrete-RVs.html#def-geometric-distribution",
  "type": "Definition",
  "number": "2.1.13",
  "title": "",
  "body": "  Suppose an event occurs with probability . If we perform independent trials repeatedly, let be the random variable which counts the number of trials performed until we see the event occur for the first time. ( counts the final trial in which the event occurs.) Then has the geometric distribution with parameter . We'll write to denote this. For each value , we'll write for . (If we want to keep track of the parameter value, we may write .)   "
},
{
  "id": "fact-geometric-probability-formula",
  "level": "2",
  "url": "sec-Discrete-RVs.html#fact-geometric-probability-formula",
  "type": "Fact",
  "number": "2.1.14",
  "title": "Geometric Probability Formula.",
  "body": " Geometric Probability Formula       "
},
{
  "id": "def-poisson-distribution",
  "level": "2",
  "url": "sec-Discrete-RVs.html#def-poisson-distribution",
  "type": "Definition",
  "number": "2.1.15",
  "title": "",
  "body": "  A Poisson process is one in which some event occurs randomly at a constant probabilistic rate over time. Suppose we observe a Poisson process for a fixed amount of time , and let count the number of occurrences of the event. Then has the Poisson distribution with parameters and . We'll write to denote this. For each value , we'll write for . (If we want to keep track of the parameter values, we may write . See for an important detail about units.)   "
},
{
  "id": "fact-poisson-probability-formula",
  "level": "2",
  "url": "sec-Discrete-RVs.html#fact-poisson-probability-formula",
  "type": "Fact",
  "number": "2.1.16",
  "title": "Poisson Probability Formula.",
  "body": " Poisson Probability Formula       "
},
{
  "id": "example-poisson-rate",
  "level": "2",
  "url": "sec-Discrete-RVs.html#example-poisson-rate",
  "type": "Example",
  "number": "2.1.17",
  "title": "",
  "body": "  Suppose we observe traffic along a particular stretch of highway which typically has 200 cars pass per hour. Let be the number of cars seen in a 2-hour observation period. Since the parameter cars per hour is given for a 1-hour period, we should scale it to find the rate for a 2-hour period: cars per 2-hours. Then, for example:   Now consider the random variable counting the number of cars seen in a 30-minute observation period. We should not calculate , since measures time in hours and measures time in minutes. We should first convert hours, then we can find our appropriately scaled rate information: cars per half-hour. Then, for example: Note that when we write the notation , we assume that and are expressed with the same time units already.   "
},
{
  "id": "exercises-Discrete-RVs-1",
  "level": "2",
  "url": "sec-Discrete-RVs.html#exercises-Discrete-RVs-1",
  "type": "Exercise",
  "number": "2.1.5.1",
  "title": "",
  "body": "  We flip a coin with unknown bias 100 times and observe 43 heads. What is the maximum likelihood estimation for the probability of the coin coming up heads?   "
},
{
  "id": "exercises-Discrete-RVs-2",
  "level": "2",
  "url": "sec-Discrete-RVs.html#exercises-Discrete-RVs-2",
  "type": "Exercise",
  "number": "2.1.5.2",
  "title": "",
  "body": "  An experiment consists of flipping a biased coin 20 times. If the coin comes up heads with probability , find the probability of seeing 5 heads. Find the probability of seeing up to (and including) 3 heads.   "
},
{
  "id": "exercises-Discrete-RVs-3",
  "level": "2",
  "url": "sec-Discrete-RVs.html#exercises-Discrete-RVs-3",
  "type": "Exercise",
  "number": "2.1.5.3",
  "title": "",
  "body": "  An experiment consists of flipping a coin repeatedly until we first see heads.   "
},
{
  "id": "exercises-Discrete-RVs-4",
  "level": "2",
  "url": "sec-Discrete-RVs.html#exercises-Discrete-RVs-4",
  "type": "Exercise",
  "number": "2.1.5.4",
  "title": "",
  "body": "  If the coin comes up heads with probability 0.4, what is the probability we’ll see our first heads within three flips? What about precisely on the third flip?   "
},
{
  "id": "exercises-Discrete-RVs-5",
  "level": "2",
  "url": "sec-Discrete-RVs.html#exercises-Discrete-RVs-5",
  "type": "Exercise",
  "number": "2.1.5.5",
  "title": "",
  "body": "  Suppose the coin has an unknown probability of coming up heads. We perform the experiment in five independent trials, during which it takes 4, 5, 4, 3, and 6 flips to see our first heads in each trial. What is the maximum likelihood estimation for the probability of the coin coming up heads on a flip?   "
},
{
  "id": "exercises-Discrete-RVs-6",
  "level": "2",
  "url": "sec-Discrete-RVs.html#exercises-Discrete-RVs-6",
  "type": "Exercise",
  "number": "2.1.5.6",
  "title": "",
  "body": "  A particular store has an average of 20 customers each hour. During a 4-hour afternoon shift, what is the probability of serving 80 customers.   "
},
{
  "id": "exercises-Discrete-RVs-7",
  "level": "2",
  "url": "sec-Discrete-RVs.html#exercises-Discrete-RVs-7",
  "type": "Exercise",
  "number": "2.1.5.7",
  "title": "",
  "body": "  A particular store owner wants to approximate the average hourly rate at which customers come into the store. They observe 80 customers enter during a particular 4-hour shift. What is the maximum likelihood estimation for the hourly customer rate?   "
},
{
  "id": "sec-Continuous-RVs",
  "level": "1",
  "url": "sec-Continuous-RVs.html",
  "type": "Section",
  "number": "2.2",
  "title": "Continuous Random Variables",
  "body": " Continuous Random Variables   Probability Density Functions  We have to think about probability differently for continuous random variables. If is a continuous random variable taking values in an interval , it doesn't quite make sense to ask, as we have for discrete random variables, to find the probabilities of each individual outcome.  When we roll a fair 6-sided die, there are 6 equally likely outcomes, so they each get assigned the probability . If we try to select a random number in the interval in a similarly \"fair\" way (i.e., with each outcome equally likely), then what probability should we assign to each outcome? If , then we have a problem: if you add up the probabilities of all the (infinitely many) outcomes, you get an infinite total, whereas the total probability in any sample space should be 1. If , then we also have a problem: if you add up the probabilities of all the outcomes, you get total of 0, whereas the total probability in any sample space should be 1.  We need a new way to model and calculate probabilities for continuous random variables.    Let be a continuous random variable taking values in the interval . The probability density function (or pdf ) for is a function defined on satisfying the properties:    for all , and     .       It's important to keep in mind that the output values of a pdf are probability densities , not probabilities. You can (somewhat casually) think of the units of values as \"probability per <units of the sample space>\". You may not have discussed the units of the differential very much in your Calculus 1 course, but has the same units as and is being multiplied by the integrand when you take an integral. So, although is not a probability, the result of computing  is a probability.  A pdf's purpose in life is to be integrated, which tells us probabilities for a continuous random variable:     Let take values in the interval . We say that has the uniform distribution if, for any subinterval , the probability that lies within is equal to the proportion of the total sample space taken by . That is: In this case, has the pdf .    We'll ignore for the moment how to find this pdf and instead we'll quickly check that it behaves the way we want it to: as we wanted.    Let be a continuous random variable taking values in the interval with pdf for some constant . Because of the restriction that the total probability must be 1, we can determine the value of : Therefore . Now we can calculate probabilities, e.g.:       Cumulative Distribution Functions  When a random variable takes values in an interval , it's often useful to consider how much probability has been accumulated up to some specified value . For each value of , we can calculate this accumulated probability. Since there's an association between inputs (the values) and output (the accumulated probability), we can naturally build a function.    Let be a continuous random variable taking values in an interval . The cumulative distribution function (or cdf ) is the function defined on such that     How do we actually calculate these cumulative probabilities? Luckily, these are precisely the sort of probabilities we can use the pdf to find: (Note that on the far left side of the equation, we used the letter to refer to some point within up to which we're trying to accumulate probability. So that value must also appear at the top of the integral sign. We can't then use the same letter for the integrand and differential inside the integral; we can't use the same letter to refer to two different variables at the same time. So, we have changed the letter inside the integral to .)  This equation may look familiar from Calculus 1. If you review the First Fundamental Theorem of Calculus , you'll see precisely the relationship between the cdf and the pdf : Let's see how we can put this relationship to use.    Suppose is uniformly distributed in the interval . We previously said in that, for any subinterval , we should have In particular, for any , we would have: Therefore, taking the derivative:     So, we can see that the idea we wanted to capture in probability led to a formula that gave accumulated probability, which then led to the pdf. Both the cdf and the pdf contain essentially all of the information we need to answer probability questions about . However, keep in mind that these functions output different mathematical objects. outputs probabilities already; must be integrated over a subinterval to find probabilities.    The Exponential Distribution    Suppose we observe a Poisson process in which an event occurs with rate parameter . Let be the time until the event is first observed. Then has the exponential distribution with parameter . We'll write to denote this.     Exponential Density Function        The binomial, geometric, Poisson, and exponential distributions are conceptually grouped together. Consider the following two dichotomies:   Is time being measured discretely or continuously?    Does the random variable count occurrences of an event, or does it measure time until an event?   There are four combinations of answers to these two questions.   Binomial  \"Time\" is discrete; the random variables counts occurrences.    Geometric  \"Time\" is discrete; the random variable measures \"time\" until an event.    Poisson  Time is continuous; the random variable counts occurrences.    Exponential  Time is continuous; the random variable measures time until an event.   When we talk about discrete \"time\", we don't always mean something measured in actual units of time. We might; for example, an experiment may involve a bacterial colony growing in a petri dish over time, but we only check in and measure something about the bacterial colony once each day. In this case, since our measurements of time must occur in whole numbers of days, time is being measured in a discrete way (that is, not involving an interval of real numbers).  Consider, instead, an experiment in which we flip a coin repeatedly until we first see heads appear. The number of flips doesn't have units of time, but counting flips is analogous to measuring time until an event occurs. The flip count is a discrete stand-in for something analogous to time. We can consider this experiment to be a discrete analog of a Poisson process.  It's also worth including a warning here about the Poisson distribution, specifically. The dichotomy mentioned above about whether time is being measured discretely or continuously is not the same as the consideration of whether the random variable itself is discrete or continuous. In a Poisson process, time is being measured continuously. But the Poisson random variable counts the number of occurrences of the event, and this number must be a whole number. So a Poisson random variable is a discrete random variable.    Normal Distribution    Consider the parametrized family of functions: The function is called a normal density function with parameters and . A continuous random variable with pdf is said to have a normal distribution . In the specific case that and , we call the resulting distribution the standard normal distribution .    It's an unfortunate reality that the normal density functions can't easily be integrated. (In fact, it is provably impossible to write nice formulas for their antiderivatives). So we won't worry much about probability computations like for normal distributions. The normal distributions will play a central role in later chapters (after which you can return here and appreciate this pun).      A continuous random variable taking values in has p.d.f. for some constant . What is the value of ?      A continuous random variable taking values in has p.d.f. . Find the c.d.f. . Use your c.d.f. to find .      A continuous random variable taking values in has c.d.f. . Find the p.d.f. .      A radioactive material emits particles at an unknown probabilistic rate particles per minute. We observe particles emitted at times 1.1, 1.7, 1.3, 2.2, 1.9, and 1.8 minutes. Write the likelihood function based on this data. What is the maximum likelihood estimation for ?      Suppose a parameter takes values in with likelihood function . Find the maximum likelihood estimation of .     "
},
{
  "id": "def-pdf",
  "level": "2",
  "url": "sec-Continuous-RVs.html#def-pdf",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be a continuous random variable taking values in the interval . The probability density function (or pdf ) for is a function defined on satisfying the properties:    for all , and     .      "
},
{
  "id": "def-continuous-uniform-distribution",
  "level": "2",
  "url": "sec-Continuous-RVs.html#def-continuous-uniform-distribution",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  Let take values in the interval . We say that has the uniform distribution if, for any subinterval , the probability that lies within is equal to the proportion of the total sample space taken by . That is: In this case, has the pdf .   "
},
{
  "id": "subsec-pdfs-10",
  "level": "2",
  "url": "sec-Continuous-RVs.html#subsec-pdfs-10",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Let be a continuous random variable taking values in the interval with pdf for some constant . Because of the restriction that the total probability must be 1, we can determine the value of : Therefore . Now we can calculate probabilities, e.g.:    "
},
{
  "id": "def-cdf",
  "level": "2",
  "url": "sec-Continuous-RVs.html#def-cdf",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  Let be a continuous random variable taking values in an interval . The cumulative distribution function (or cdf ) is the function defined on such that    "
},
{
  "id": "subsec-cdf-6",
  "level": "2",
  "url": "sec-Continuous-RVs.html#subsec-cdf-6",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Suppose is uniformly distributed in the interval . We previously said in that, for any subinterval , we should have In particular, for any , we would have: Therefore, taking the derivative:    "
},
{
  "id": "def-exponential-distribution",
  "level": "2",
  "url": "sec-Continuous-RVs.html#def-exponential-distribution",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": "  Suppose we observe a Poisson process in which an event occurs with rate parameter . Let be the time until the event is first observed. Then has the exponential distribution with parameter . We'll write to denote this.   "
},
{
  "id": "fact-exponential-pdf",
  "level": "2",
  "url": "sec-Continuous-RVs.html#fact-exponential-pdf",
  "type": "Fact",
  "number": "2.2.7",
  "title": "Exponential Density Function.",
  "body": " Exponential Density Function       "
},
{
  "id": "def-normal-distribution",
  "level": "2",
  "url": "sec-Continuous-RVs.html#def-normal-distribution",
  "type": "Definition",
  "number": "2.2.8",
  "title": "",
  "body": "  Consider the parametrized family of functions: The function is called a normal density function with parameters and . A continuous random variable with pdf is said to have a normal distribution . In the specific case that and , we call the resulting distribution the standard normal distribution .   "
},
{
  "id": "exercises-Continuous-RVs-1",
  "level": "2",
  "url": "sec-Continuous-RVs.html#exercises-Continuous-RVs-1",
  "type": "Exercise",
  "number": "2.2.5.1",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. for some constant . What is the value of ?   "
},
{
  "id": "exercises-Continuous-RVs-2",
  "level": "2",
  "url": "sec-Continuous-RVs.html#exercises-Continuous-RVs-2",
  "type": "Exercise",
  "number": "2.2.5.2",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . Find the c.d.f. . Use your c.d.f. to find .   "
},
{
  "id": "exercises-Continuous-RVs-3",
  "level": "2",
  "url": "sec-Continuous-RVs.html#exercises-Continuous-RVs-3",
  "type": "Exercise",
  "number": "2.2.5.3",
  "title": "",
  "body": "  A continuous random variable taking values in has c.d.f. . Find the p.d.f. .   "
},
{
  "id": "exercises-Continuous-RVs-4",
  "level": "2",
  "url": "sec-Continuous-RVs.html#exercises-Continuous-RVs-4",
  "type": "Exercise",
  "number": "2.2.5.4",
  "title": "",
  "body": "  A radioactive material emits particles at an unknown probabilistic rate particles per minute. We observe particles emitted at times 1.1, 1.7, 1.3, 2.2, 1.9, and 1.8 minutes. Write the likelihood function based on this data. What is the maximum likelihood estimation for ?   "
},
{
  "id": "exercises-Continuous-RVs-5",
  "level": "2",
  "url": "sec-Continuous-RVs.html#exercises-Continuous-RVs-5",
  "type": "Exercise",
  "number": "2.2.5.5",
  "title": "",
  "body": "  Suppose a parameter takes values in with likelihood function . Find the maximum likelihood estimation of .   "
},
{
  "id": "sec-Expected-Value",
  "level": "1",
  "url": "sec-Expected-Value.html",
  "type": "Section",
  "number": "3.1",
  "title": "Expected Value",
  "body": " Expected Value   Discrete Expected Value  A full probability distribution (for a discrete random variable) or a density function (for a continuous random variable) carry all of the probability information. Often, we seek statistics , i.e., numbers that summarize a distribution in some way.    Let be a discrete random variable taking the values . The expected value (also called mean , or expectation ) of is the weighted average of the values of , where the weights are the probabilities of taking each value:       If takes on the values uniformly (i.e., each value having probability ), then the expected value is the usual average: For example, the expected value of a fair 6-sided die roll is:       Suppose we roll a fair 6-sided die two times, and let be the sum of the rolls. It's straightforward to check the distribution for shown below. We've also included a column containing the products , which must be summed up to find .           2      3      4      5      6      7      8      9      10      11      12       The sum of the third column gives .      Let indicate an event which has probability . Then: That is, the expected value of an indicator random variable is the probability of the event that it indicates.    Having found the expected value for one named distribution, we may be tempted to run through our other discrete distributions (binomial, geometric, and Poisson) and find nice formulas for their expected values. Unfortunately, both the geometric distribution and the Poisson distribution have infinitely many possible values, and the summation of infinitely many discrete terms is beyond the scope of this course. (A Calculus 2 course covering series would give the right tools to find expected value formulas with full justification for these distributions.)  The binomial distribution takes only finitely many values, and we have that lets us generate a distribution table reasonably quickly, given the parameters and . Feel free to pick some parameter values (keep fairly small!) to try this calculation by hand, but we'll use a powerful theorem a bit later to give a very nice general formula depending on and .    Continuous Expected Value      Linearity of Expected Value        Consider a random variable with probability distribution below. Find .          1  0.1    2  0.05    3  0.2    4  0.15    5  0.15    6  0.1    7  0.05    8  0.1    9  0.1         Let and be random variables each taking the values 1, 2, 3, 4, 5. Write different distribution tables for and so that they have the same expected value.      Suppose we flip a coin times, and let count the number of heads. If the coin comes up heads on a flip with probability , what is ? What if and ? What if and ?      If , , and , what is ?      A continuous random variable taking values in has p.d.f. . What is ?      A continuous random variable taking values in has p.d.f. . What is ?      A continuous random variable taking values in has p.d.f. . What is ?      A continuous random variable taking values in has p.d.f. for some constant . In a previous problem, you found the value of . Now, find .      A continuous random variable taking values in has p.d.f. . Find .     "
},
{
  "id": "subsec-discrete-EV-2",
  "level": "2",
  "url": "sec-Expected-Value.html#subsec-discrete-EV-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statistics "
},
{
  "id": "def-discrete-expected-value",
  "level": "2",
  "url": "sec-Expected-Value.html#def-discrete-expected-value",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  Let be a discrete random variable taking the values . The expected value (also called mean , or expectation ) of is the weighted average of the values of , where the weights are the probabilities of taking each value:    "
},
{
  "id": "example-EV-die",
  "level": "2",
  "url": "sec-Expected-Value.html#example-EV-die",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  If takes on the values uniformly (i.e., each value having probability ), then the expected value is the usual average: For example, the expected value of a fair 6-sided die roll is:    "
},
{
  "id": "example-EV-sum-2-dice",
  "level": "2",
  "url": "sec-Expected-Value.html#example-EV-sum-2-dice",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Suppose we roll a fair 6-sided die two times, and let be the sum of the rolls. It's straightforward to check the distribution for shown below. We've also included a column containing the products , which must be summed up to find .           2      3      4      5      6      7      8      9      10      11      12       The sum of the third column gives .   "
},
{
  "id": "example-indicator-EV",
  "level": "2",
  "url": "sec-Expected-Value.html#example-indicator-EV",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Let indicate an event which has probability . Then: That is, the expected value of an indicator random variable is the probability of the event that it indicates.   "
},
{
  "id": "exercises-Expected-Value-1",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-1",
  "type": "Exercise",
  "number": "3.1.4.1",
  "title": "",
  "body": "  Consider a random variable with probability distribution below. Find .          1  0.1    2  0.05    3  0.2    4  0.15    5  0.15    6  0.1    7  0.05    8  0.1    9  0.1      "
},
{
  "id": "exercises-Expected-Value-2",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-2",
  "type": "Exercise",
  "number": "3.1.4.2",
  "title": "",
  "body": "  Let and be random variables each taking the values 1, 2, 3, 4, 5. Write different distribution tables for and so that they have the same expected value.   "
},
{
  "id": "exercises-Expected-Value-3",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-3",
  "type": "Exercise",
  "number": "3.1.4.3",
  "title": "",
  "body": "  Suppose we flip a coin times, and let count the number of heads. If the coin comes up heads on a flip with probability , what is ? What if and ? What if and ?   "
},
{
  "id": "exercises-Expected-Value-4",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-4",
  "type": "Exercise",
  "number": "3.1.4.4",
  "title": "",
  "body": "  If , , and , what is ?   "
},
{
  "id": "exercises-Expected-Value-5",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-5",
  "type": "Exercise",
  "number": "3.1.4.5",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . What is ?   "
},
{
  "id": "exercises-Expected-Value-6",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-6",
  "type": "Exercise",
  "number": "3.1.4.6",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . What is ?   "
},
{
  "id": "exercises-Expected-Value-7",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-7",
  "type": "Exercise",
  "number": "3.1.4.7",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . What is ?   "
},
{
  "id": "exercises-Expected-Value-8",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-8",
  "type": "Exercise",
  "number": "3.1.4.8",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. for some constant . In a previous problem, you found the value of . Now, find .   "
},
{
  "id": "exercises-Expected-Value-9",
  "level": "2",
  "url": "sec-Expected-Value.html#exercises-Expected-Value-9",
  "type": "Exercise",
  "number": "3.1.4.9",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . Find .   "
},
{
  "id": "sec-Variance",
  "level": "1",
  "url": "sec-Variance.html",
  "type": "Section",
  "number": "3.2",
  "title": "Variance",
  "body": " Variance  Text of section.     Consider a random variable with probability distribution below. Find .          1  0.1    2  0.05    3  0.2    4  0.15    5  0.15    6  0.1    7  0.05    8  0.1    9  0.1         Let be a random variable taking the values 1, 2, 3, 4, 5. Write a distribution table for , then use your table to write a distribution for . Then, find .      Suppose we flip a coin times, and let count the number of heads. If the coin comes up heads on a flip with probability , what is ? What if and ? What if and ?      If , , what is ?      A continuous random variable taking values in has p.d.f. . What is ?      A continuous random variable taking values in has p.d.f. . What is ?      A continuous random variable taking values in has p.d.f. . What is ?      A continuous random variable taking values in has p.d.f. for some constant . In a previous problem, you found the value of . Now, find .      A continuous random variable taking values in has p.d.f. . Find .     "
},
{
  "id": "exercises-Variance-1",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-1",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  Consider a random variable with probability distribution below. Find .          1  0.1    2  0.05    3  0.2    4  0.15    5  0.15    6  0.1    7  0.05    8  0.1    9  0.1      "
},
{
  "id": "exercises-Variance-2",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-2",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  Let be a random variable taking the values 1, 2, 3, 4, 5. Write a distribution table for , then use your table to write a distribution for . Then, find .   "
},
{
  "id": "exercises-Variance-3",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-3",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  Suppose we flip a coin times, and let count the number of heads. If the coin comes up heads on a flip with probability , what is ? What if and ? What if and ?   "
},
{
  "id": "exercises-Variance-4",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-4",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  If , , what is ?   "
},
{
  "id": "exercises-Variance-5",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-5",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . What is ?   "
},
{
  "id": "exercises-Variance-6",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-6",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . What is ?   "
},
{
  "id": "exercises-Variance-7",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-7",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . What is ?   "
},
{
  "id": "exercises-Variance-8",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-8",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. for some constant . In a previous problem, you found the value of . Now, find .   "
},
{
  "id": "exercises-Variance-9",
  "level": "2",
  "url": "sec-Variance.html#exercises-Variance-9",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "",
  "body": "  A continuous random variable taking values in has p.d.f. . Find .   "
},
{
  "id": "sec-Covariance",
  "level": "1",
  "url": "sec-Covariance.html",
  "type": "Section",
  "number": "3.3",
  "title": "Covariance",
  "body": " Covariance  Text of section.          "
},
{
  "id": "exercises-Covariance-1",
  "level": "2",
  "url": "sec-Covariance.html#exercises-Covariance-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "     "
},
{
  "id": "sec-CLT",
  "level": "1",
  "url": "sec-CLT.html",
  "type": "Section",
  "number": "4.1",
  "title": "Central Limit Theorem",
  "body": " Central Limit Theorem  Text of section.  "
},
{
  "id": "sec-Confidence-Intervals",
  "level": "1",
  "url": "sec-Confidence-Intervals.html",
  "type": "Section",
  "number": "4.2",
  "title": "Confidence Intervals",
  "body": " Confidence Intervals  Text of section.  "
},
{
  "id": "sec-One-Sample-Tests",
  "level": "1",
  "url": "sec-One-Sample-Tests.html",
  "type": "Section",
  "number": "5.1",
  "title": "One Sample Tests",
  "body": " One Sample Tests  Text of section.  "
},
{
  "id": "sec-Two-Sample-Tests",
  "level": "1",
  "url": "sec-Two-Sample-Tests.html",
  "type": "Section",
  "number": "5.2",
  "title": "Two Sample Tests",
  "body": " Two Sample Tests  Text of section.  "
},
{
  "id": "sec-Power",
  "level": "1",
  "url": "sec-Power.html",
  "type": "Section",
  "number": "5.3",
  "title": "Power of a Test",
  "body": " Power of a Test  Text of section.  "
},
{
  "id": "sec-Chi-Squared",
  "level": "1",
  "url": "sec-Chi-Squared.html",
  "type": "Section",
  "number": "5.4",
  "title": "<span class=\"process-math\">\\(\\chi^2\\)<\/span> Test",
  "body": " Test  Text of section.  "
},
{
  "id": "sec-Correlation",
  "level": "1",
  "url": "sec-Correlation.html",
  "type": "Section",
  "number": "6.1",
  "title": "Correlation",
  "body": " Correlation  Text of section.  "
},
{
  "id": "sec-Linear-Regression",
  "level": "1",
  "url": "sec-Linear-Regression.html",
  "type": "Section",
  "number": "6.2",
  "title": "Linear Regression",
  "body": " Linear Regression  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
