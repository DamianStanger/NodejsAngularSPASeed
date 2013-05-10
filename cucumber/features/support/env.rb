require 'rubygems'
require 'capybara'
require 'capybara/dsl'

#require 'capybara/poltergeist'
#Capybara.javascript_driver = :poltergeist

Capybara.run_server = false
Capybara.default_driver = :selenium
#Capybara.default_driver = :poltergeist
#Capybara.register_driver :poltergeist
#Capybara.current_driver = :poltergeist
#Capybara.javascript_driver = :webkit
Capybara.default_selector = :css

module Helpers
  def without_resynchronize
    page.driver.options[:resynchronize] = false
    yield
    page.driver.options[:resynchronize] = true
  end
end

World(Capybara::DSL, Helpers)