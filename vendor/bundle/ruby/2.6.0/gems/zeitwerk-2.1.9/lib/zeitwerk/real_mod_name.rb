module Zeitwerk::RealModName
  UNBOUND_METHOD_MODULE_NAME = Module.instance_method(:name)
  private_constant :UNBOUND_METHOD_MODULE_NAME

  # Returns the real name of the class or module, as set after the first
  # constant to which it was assigned (or nil).
  #
  # The name method can be overridden, hence the indirection in this method.
  #
  # @param mod [Class, Module]
  # @return [String]
  def real_mod_name(mod)
    UNBOUND_METHOD_MODULE_NAME.bind(mod).call
  end
end