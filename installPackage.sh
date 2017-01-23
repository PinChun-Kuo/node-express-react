ISSUE_TRACKER_DIR="/usr/project/issuetracker"
TMP_NODE_MODULES="/tmp/node_modules"

# move node_module if there no any node_modules when mounting rui_service
cd $ISSUE_TRACKER_DIR
if [ -d "$ISSUE_TRACKER_DIR/node_modules" ]; then
	echo "node_modules exist, will not execute mv"
else
  echo "node_modules doesn't exist, will execute mv"
  mv $TMP_NODE_MODULES .
  ls -al
fi
