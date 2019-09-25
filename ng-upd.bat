CALL git commit -am "pre updates commit"
CALL ng update @angular/cli --force
CALL git commit -am "ng cli updates to latest"
CALL ng update @angular/core --force
CALL git commit -am "ng updates to latest"
CALL ng update @angular/material
CALL git commit -am "ng material to latest"
CALL bt.bat
