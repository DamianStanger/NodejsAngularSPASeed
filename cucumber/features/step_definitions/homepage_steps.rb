Given(/^im on the application homepage$/) do
  visit 'http://localhost:1337'
end
Then(/^i should redirect to "(.*?)"$/) do |arg|
  current_url.should =~ Regexp.new(arg)
end
When(/^i click on "([^"]*)"$/) do |arg|
  click_link arg
end
Then(/^i should see "([^"]*)"$/) do |arg|
  find('div[ng-view] p:first-child').text.should =~ Regexp.new(arg)
end