Given(/^the input "(.*?)"$/) do |input1|
  @input1 = input1
end

When(/^the calculator is run$/) do
   @actual = eval(@input1)
end

Then(/^the output should be "(.*?)"$/) do |expected|
  @actual.should == expected.to_i
end
